import { useEffect, useRef, useState } from "react";
import { HeartHandshake, Mail, Linkedin } from "lucide-react";
import { teamData } from "../data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlassCard from "./GlassCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MeetTeam() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const glassCardRef = useRef<HTMLDivElement>(null);
  const videoCardRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);

  // Monitor video metadata loading to get actual duration
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      if (video.duration) {
        setVideoDuration(video.duration);
      }
    };

    if (video.readyState >= 1 && video.duration) {
      setVideoDuration(video.duration);
    } else {
      video.addEventListener("loadedmetadata", handleLoadedMetadata);
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  // ScrollTrigger entry animations for the cards
  useEffect(() => {
    const section = sectionRef.current;
    const glassCard = glassCardRef.current;
    const videoCard = videoCardRef.current;

    if (!section || !glassCard || !videoCard) return;

    // Immediately hide elements on mount via GSAP to avoid layout flash
    gsap.set(glassCard, { opacity: 0, x: -55 });
    gsap.set(videoCard, { opacity: 0, x: 55 });

    const ctx = gsap.context(() => {
      // Fade and slide in Glass Card from the left
      gsap.to(glassCard, {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%", // Trigger when section top is 85% down the viewport
          toggleActions: "play none none none",
        },
      });

      // Fade and slide in Video Card from the right
      gsap.to(videoCard, {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    // Refresh ScrollTrigger after a short delay to accommodate dynamic layouts (e.g. three.js canvas, suspense fallbacks)
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  // ScrollTrigger pinning (Desktop vs Mobile handling)
  useEffect(() => {
    if (videoDuration <= 0) return;

    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const mm = gsap.matchMedia();

    // Desktop: Pin the section and track scroll progress to update activeIndex
    mm.add("(min-width: 768px)", () => {
      // Start video playback natively for smooth 60fps rendering
      video.play().catch(() => {});

      ScrollTrigger.create({
        trigger: section,
        start: "top top",      // Pin when the section hits the top of viewport
        end: "+=2000",         // Scroll length
        pin: true,             // Pin the section
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress; // 0 to 1
          const newIndex = Math.min(
            teamData.length - 1,
            Math.floor(progress * teamData.length)
          );
          setActiveIndex(newIndex);
        },
      });
    });

    // Mobile: Autoplay on loop, change active index based on timeupdate
    mm.add("(max-width: 767px)", () => {
      video.loop = true;
      video.play().catch(() => {
        // Handle potential browser block for autoplay
      });

      const handleMobileTimeUpdate = () => {
        if (!video.duration) return;
        const newIndex = Math.min(
          teamData.length - 1,
          Math.floor((video.currentTime / video.duration) * teamData.length)
        );
        setActiveIndex(newIndex);
      };

      video.addEventListener("timeupdate", handleMobileTimeUpdate);

      return () => {
        video.removeEventListener("timeupdate", handleMobileTimeUpdate);
        video.loop = false;
        video.pause();
      };
    });

    return () => {
      mm.revert();
    };
  }, [videoDuration]);

  // Loop current team member's video segment at 60fps on desktop
  useEffect(() => {
    if (videoDuration <= 0) return;

    const video = videoRef.current;
    if (!video) return;

    let rafId: number;

    const render = () => {
      if (window.innerWidth >= 768) {
        const startTime = activeIndex * (videoDuration / 4);
        const endTime = (activeIndex + 1) * (videoDuration / 4);

        // Keep video looping within the current active member's segment boundaries
        if (video.currentTime < startTime || video.currentTime >= endTime) {
          if (!video.seeking) {
            video.currentTime = startTime;
          }
        }
      }
      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [videoDuration, activeIndex]);

  // Synchronize activeIndex with displayedIndex, trigger single seek on index change, and run text fade-in
  useEffect(() => {
    if (activeIndex === displayedIndex) return;

    setDisplayedIndex(activeIndex);

    // Jump video once to the new segment start when activeIndex changes
    const video = videoRef.current;
    if (video && videoDuration > 0 && window.innerWidth >= 768) {
      const startTime = activeIndex * (videoDuration / 4);
      if (!video.seeking) {
        video.currentTime = startTime;
      }
      video.play().catch(() => {});
    }
  }, [activeIndex, displayedIndex, videoDuration]);

  useEffect(() => {
    if (!textContainerRef.current) return;

    gsap.killTweensOf(textContainerRef.current);
    gsap.fromTo(
      textContainerRef.current,
      { opacity: 0, y: 12 },
      {
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: "power2.out",
      }
    );
  }, [displayedIndex]);

  const currentMember = teamData[displayedIndex];

  return (
    <section
      id="team"
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center pt-[20vh] pb-12 bg-transparent relative scroll-mt-14"
    >
      <div className="w-full">
        
        {/* Centered Headline */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2
            id="team-main-heading"
            className="text-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
          >
            Meet the Team
          </h2>
          <p className="text-sm text-white/80 leading-relaxed font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
            Our clinic combines advanced medicine with premium aesthetic design guidelines. Watch our team dynamic unfold in sync.
          </p>
        </div>

        {/* Side-by-Side Responsive Layout */}
        <div className="relative flex flex-col md:flex-row items-center justify-center max-w-4xl mx-auto w-full px-4 gap-0 mt-8">
          
          {/* Glass Card (Left on Desktop, Bottom on Mobile) */}
          <div
            ref={glassCardRef}
            className="w-full max-w-[360px] md:max-w-none md:w-[360px] h-[640px] z-20 order-2 md:order-1 -mt-[192px] md:mt-0 shrink-0"
          >
            <GlassCard
              id="team-founder-card"
              intensity="high"
              glowColor="red"
              interactive={false}
              className="p-6 sm:p-8 flex flex-col items-center justify-center text-center h-full w-full border-white/20 shadow-2xl"
            >
              {/* Text Container with Ref for GSAP Animation */}
              <div
                ref={textContainerRef}
                className="flex flex-col items-center justify-center w-full h-full space-y-8"
              >
                {/* Designation */}
                <p
                  id="founder-role"
                  className="text-[10px] sm:text-xs font-semibold text-primary-red tracking-[0.25em] uppercase text-center"
                >
                  {currentMember.role}
                </p>

                {/* Name */}
                <h3
                  id="founder-name"
                  className="text-display text-2xl sm:text-3xl lg:text-3xl font-extrabold text-white leading-tight"
                >
                  {currentMember.name}
                </h3>

                {/* Elegant Decorative Divider */}
                <div className="w-12 h-[1px] bg-white/20" />

                {/* Bio Description */}
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light max-w-xs h-24 flex items-center justify-center">
                  {currentMember.bio}
                </p>

                {/* Social Contact Links */}
                <div className="flex justify-center space-x-3.5 pt-2">
                  <a
                    href="#"
                    className="p-3 rounded-full bg-white/5 hover:bg-primary-red hover:text-white text-white/70 hover:shadow-lg hover:shadow-primary-red/20 transition-all duration-300 border border-white/10"
                    aria-label="Send Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="p-3 rounded-full bg-white/5 hover:bg-primary-red hover:text-white text-white/70 hover:shadow-lg hover:shadow-primary-red/20 transition-all duration-300 border border-white/10"
                    aria-label="Visit LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Video Card (Right on Desktop, Top on Mobile) */}
          <div
            ref={videoCardRef}
            className="w-full max-w-[360px] md:max-w-none md:w-[360px] h-[640px] z-10 order-1 md:order-2 md:-ml-[72px] shrink-0"
          >
            <div className="relative w-full h-full rounded-2xl border border-white/20 bg-black/40 overflow-hidden shadow-2xl">
              <video
                ref={videoRef}
                preload="auto"
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-80"
                src="/team-video.webm"
              />
              {/* Dark gradient overlay for a premium cinematic depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/35" />

              {/* Clean clinic label badge overlay */}
              <div className="absolute top-4 right-4 flex items-center space-x-2 text-white/75 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono tracking-widest uppercase">
                <HeartHandshake className="w-3.5 h-3.5 text-primary-red" />
                <span>Team Showcase</span>
              </div>
              
              {/* Video status indicator in the bottom-left corner */}
              <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-white/60 text-[10px] font-mono tracking-widest uppercase bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-red animate-pulse" />
                <span>Active Track: {currentMember.name}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
