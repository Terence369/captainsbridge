"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronRight,
  Ship,
  Award,
  Users,
  GraduationCap,
  Anchor,
  Compass,
  LifeBuoy,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import DetailDialog, { type DetailDialogData } from "@/components/detail-dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { courseTitles } from "@/lib/courses"
import AnimatedCounter from "@/components/animated-counter"
import TestimonialsMarquee from "@/components/testimonials-marquee"
import YouTubeHeroBackground from "@/components/youtube-hero-background"
import ParallaxImage from "@/components/parallax-image"
import ParallaxFixedSection from "@/components/parallax-fixed-section"
import { RevealImageList } from "@/components/ui/reveal-images"

// Animation hook for scroll-triggered animations
function useIntersectionObserver(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, ...options },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return [ref, isVisible] as const
}

// Animated section wrapper component
function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: { children: React.ReactNode; className?: string; delay?: number }) {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function CochinMaritimeAcademy() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogData, setDialogData] = useState<DetailDialogData | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "courses", "partners", "stats", "facilities", "testimonials", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) {
        // just trigger state change to apply active styles elsewhere if needed later
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-page-white">
      {/* Hero Section (left intact) */}
      <section id="home" className="relative min-h-[90vh] flex items-center bg-page-white">
        <YouTubeHeroBackground videoId="UG4wQMfSp6g" overlayOpacity={0} heightClass="min-h-[90vh]">
          <div className="mx-auto max-w-[1320px] px-20 pt-20 pb-[21px] flex flex-col items-start justify-center relative min-h-[90vh]" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
            <div className="max-w-3xl">
              <h1 className="text-6xl md:text-7xl font-black mb-8 animate-in slide-in-from-bottom duration-800 text-balance leading-tight" style={{ color: 'rgba(255, 255, 255, 1)', letterSpacing: '3.6px', textTransform: 'uppercase', font: '900 99px/90px "Bebas Neue", sans-serif' }}>
                Welcome to Cochin Maritime Academy
              </h1>
              <div className="flex flex-col sm:flex-row gap-6 animate-in slide-in-from-bottom duration-800 delay-300">
                <button
                  className="px-10 py-4 text-lg font-bold uppercase transition-all duration-300 border-2 rounded btn-primary"
                  onClick={() => scrollToSection("courses")}
                >
                  Explore Courses
                </button>
                <button
                  className="px-10 py-4 text-lg font-bold uppercase transition-all duration-300 border-2 rounded btn-outline-cyan"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronRight className="rotate-90" size={32} style={{ color: 'rgb(0, 152, 183)' }} />
            </div>
          </div>
        </YouTubeHeroBackground>
      </section>

      {/* Reveal Image List (services) */}
      <section aria-label="our-expertise" className="py-12 bg-page-white">
        <RevealImageList />
      </section>

      {/* Parallax Section Break */}
      <ParallaxFixedSection
        imageUrl="https://images.pexels.com/photos/34664187/pexels-photo-34664187.jpeg"
        className="py-16"
      >
        <div className="container mx-auto px-4" style={{ maxWidth: '1320px', paddingLeft: '80px', paddingRight: '80px' }}>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-black heading-premium text-primary-cyan">Explore Our Maritime World</h3>
          </div>
        </div>
      </ParallaxFixedSection>

      {/* About Section */}
      <section id="about" className="py-24 bg-page-white">
        <div className="container mx-auto px-4" style={{ maxWidth: '1320px', paddingLeft: '80px', paddingRight: '80px' }}>
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight heading-premium text-primary-cyan">
                Welcome to Cochin Maritime Academy
              </h2>
              <div className="w-24 h-1 mx-auto mb-8 divider-gold" />
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: Ship,
                title: "Marine Institute",
                description:
                  "We undertake, coordinate, promote and assist in marine research and development. We also provide specialized manpower and...",
                image: "/maritime-training-classroom-with-students.jpg",
              },
              {
                icon: Anchor,
                title: "Blessed With",
                description:
                  "Blessed with a rich coastal line and a well known sea port in south India Kochi is notable for its positive and supportive mariti...",
                image: "/advanced-computer-lab-with-maritime-simulation.jpg",
              },
              {
                icon: Compass,
                title: "Why Choose Us",
                description:
                  "Shipping, logistics, and freight are industries at the heart of modern society. These high-technology and operational-driven services...",
                image: "/group-of-maritime-students-in-uniform.jpg",
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden h-full" style={{ backgroundColor: 'rgb(245, 243, 239)' }}>
                  <div className="relative h-48 overflow-hidden">
                    <ParallaxImage src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full" intensity={0.12} zoom={0.08} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-6">
                      <div className="p-4 rounded-full group-hover:scale-110 transition-transform text-white icon-circle-cyan">
                        <item.icon className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-center uppercase heading-premium text-primary-cyan">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-center text-dark-secondary">
                      {item.description}
                    </p>
                    <button className="text-sm font-semibold mt-4 mx-auto block transition-all uppercase text-accent-gold">
                      Read More →
                    </button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24 bg-page-white">
        <div className="container mx-auto px-4" style={{ maxWidth: '1320px', paddingLeft: '80px', paddingRight: '80px' }}>
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight heading-premium text-primary-cyan">
                Cochin Maritime Academy Facilities
              </h2>
              <div className="w-24 h-1 mx-auto mb-8 divider-gold" />
              <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium body-premium">
                Our offerings are wide-ranging and all-inclusive. We are adept in making available optimal solutions for residential, commercial and industrial verticals.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Spacious Class Rooms With Well Equipped Furniture",
                description:
                  "Cochin Maritime can boast of spacious, well-ventilated and excellently furnished classrooms to make the students learning comfortable and enjoyable. Individual tables and chairs are provided to studen...",
                image: "/spacious-maritime-classroom-with-modern-furniture.jpg",
              },
              {
                title: "Advanced Computer Lab Facility",
                description:
                  "The Advanced Computer Lab is a state-of-the-art teaching computer kits, which also supports a wide range of spatial information system research projects. The lab is used by many different classes from...",
                image: "/modern-computer-lab-with-red-chairs-maritime-train.jpg",
              },
              {
                title: "Food Safety and HACCP Training",
                description:
                  "Cochin Maritime has developed this course to provide an understanding of management systems approach to food safety and data required to implement and maintain Food Safety System. By the end of the...",
                image: "/food-safety-training-checklist-maritime.jpg",
              },
              {
                title: "Placement Guidelines",
                description:
                  "Cochin Maritime operate a unique of sea placement program where the Cadets train on various ship types across different marine sectors...",
                image: "/maritime-cadets-in-white-uniform-training.jpg",
              },
              {
                title: "Accreditations / Approvals",
                description:
                  "All Courses approved by STCW COUNCIL has had the unique good fortune it having a succession of eminent directors to direct its destiny along with an extraordinary advisory board and educational experts...",
                image: "/person-signing-maritime-certification-documents.jpg",
              },
              {
                title: "Partners & Supporting Organisations",
                description:
                  "Our supporting partners have extended their knowledge, expertise, network and valuable insights in so many ways we are thankful for Cochin Maritime standards and process remain relevant because of our...",
                image: "/maritime-professionals-discussing-partnership.jpg",
              },
            ].map((course, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden h-full flex flex-col" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                  <div className="relative h-56 overflow-hidden">
                    <ParallaxImage src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-full" intensity={0.12} zoom={0.08} />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  </div>
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <h3 className="text-lg font-bold mb-3 leading-tight uppercase heading-premium text-primary-cyan">
                      {course.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4 flex-grow text-dark-secondary">
                      {course.description}
                    </p>
                    <button className="w-full font-semibold transition-all py-3 rounded uppercase btn-primary">
                      View Detail
                    </button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section with Fixed-Layer Parallax */}
      <ParallaxFixedSection
        imageUrl="https://images.pexels.com/photos/3435378/pexels-photo-3435378.jpeg"
        className="py-24"
      >
        <div className="container mx-auto px-4" style={{ maxWidth: '1320px', paddingLeft: '80px', paddingRight: '80px' }}>
          <AnimatedSection>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight heading-premium text-white" style={{ color: "rgba(255, 255, 255, 0.87)" }}>
                Partners and Supporting Organization
              </h2>
              <p className="text-lg md:text-xl body-premium text-white" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
                The Institute for Cochin Maritime Institute strives to increase public understanding of the causes and consequences of marine degradation while also promoting solutions. Through our partnerships, we are working to further conservation of marine life and ocean environments around the world.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Hydrogen Sulphide Awareness (H2S)",
                desc:
                  "Hydrogen Sulphide (H2S) is a highly toxic and flammable gas. Each year in...",
              },
              {
                title: "Helicopter Under‑Water Escape Training (HUET)",
                desc:
                  "This course aims to train personnel intended to work offshore, using the hel...",
              },
              {
                title: "Basic Offshore Safety & Emergency Training (BOISET)",
                desc:
                  "The course is designed for personnel intending to ...",
              },
              {
                title: "Rigging and Slinging Safety Level - 2",
                desc:
                  "Rigger Level 2 training provides the knowledge and skills necessary for a p...",
              },
              {
                title: "Lifting and Hoisting Safety",
                desc:
                  "The course provides vital information for those assisting or working around...",
              },
              {
                title: "Crane Operators Theory (On Demand Practical)",
                desc:
                  "Our Crane Operator Training Program will train your operators on the site...",
              },
              {
                title: "Cookery Course With HACCP",
                desc:
                  "On completion of this food safety training course, participants will be abl...",
              },
              {
                title: "Basic Cooking Course Certification",
                desc:
                  "Get info about online programs in cooking. Read about program requiremen...",
              },
            ].map((card, i) => (
              <Card key={i} className="border-0 overflow-hidden" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                <div className="p-6 text-center">
                  <div className="mx-auto mb-4 grid size-16 place-items-center rounded-full" style={{ backgroundColor: 'rgba(0, 152, 183, 0.2)' }}>
                    <LifeBuoy style={{ color: 'rgb(0, 152, 183)' }} />
                  </div>
                  {card.title === "Rigging and Slinging Safety Level - 2" ? (
                    <h3 className="text-base font-semibold uppercase heading-premium text-primary-cyan">
                      Rigging and Slinging <br />
                      Safety Level - 2
                    </h3>
                  ) : (
                    <h3 className="text-base font-semibold uppercase heading-premium text-primary-cyan">
                      {card.title}
                    </h3>
                  )}
                  <p className="mt-3 text-sm leading-relaxed text-dark-secondary">
                    {card.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </ParallaxFixedSection>

      {/* Stats Section */}
      <section id="stats" className="py-24 bg-cyan" style={{ backgroundColor: 'var(--primary-cyan)' }}>
        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px);
            }
          }
          @keyframes pulse-scale {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
          }
          @keyframes subtle-hop {
            0%, 100% {
              transform: translateY(0px);
              box-shadow: 0 4px 12px rgba(222, 140, 4, 0.2);
            }
            50% {
              transform: translateY(-6px);
              box-shadow: 0 8px 20px rgba(222, 140, 4, 0.4);
            }
          }
          .icon-animate {
            animation: float 3s ease-in-out infinite, pulse-scale 2s ease-in-out infinite;
          }
          .icon-badge {
            animation: subtle-hop 2.5s ease-in-out infinite;
          }
        `}</style>
        <div className="container mx-auto px-4" style={{ maxWidth: '1320px', paddingLeft: '80px', paddingRight: '80px' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: GraduationCap, number: "5000+", label: "Students Trained" },
              { icon: Award, number: "25+", label: "Years Experience" },
              { icon: Ship, number: "50+", label: "Courses Offered" },
              { icon: Users, number: "100%", label: "Placement Support" },
            ].map((stat, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="text-center group hover:scale-105 transition-transform">
                  <div className="icon-badge bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                    <stat.icon className="w-10 h-10 icon-animate" style={{ color: 'rgb(255, 255, 255)' }} />
                  </div>
                  <div className="text-3xl md:text-4xl font-black mb-2 heading-premium" style={{ color: 'rgb(255, 255, 255)', letterSpacing: '-0.02em' }}>
                    <AnimatedCounter targetText={stat.number} duration={2500} />
                  </div>
                  <div className="text-sm md:text-base text-white/90">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Highlight */}
      <section id="facilities" className="py-24 bg-page-white">
        <div className="container mx-auto px-4" style={{ maxWidth: '1320px', paddingLeft: '80px', paddingRight: '80px' }}>
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight heading-premium text-primary-cyan">
                Director's Message
              </h2>
              <div className="w-24 h-1 mx-auto divider-gold" />
            </div>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <div className="border-4 p-4 rounded-lg border-gold">
                    <ParallaxImage
                      src="https://cdn.builder.io/api/v1/image/assets%2F5467efc660814048b4ece449e1f2e104%2F9b9a033ea00d44ecb3052033f1830fc2"
                      alt="Director's Portrait"
                      className="w-full rounded-lg shadow-lg"
                      intensity={0.06}
                      zoom={0.03}
                    />
                  </div>
                </div>
                <div>
                  <p className="leading-relaxed mb-6 text-justify text-lg body-premium text-dark-secondary">
                    Cochin Maritime training for merchant navy is a new dimension in the field of job oriented professional courses. Facility here in catering with a rich coastline, a well-known port and an established maritime environment, and is notable for its positive side of the maritime sector. By catering complete courses in accordance with the guidelines of the International Maritime Organization's Standards for Training, Certification and Watchkeeping, International Safety Management Code, and International Ship and Port Facility Security.
                  </p>
                  <p className="leading-relaxed text-justify text-lg body-premium text-dark-secondary">
                    We further mention that we have the vast experience in training the aspirant candidates in all trades essential for merchant navy career from Cadet & GP Officer.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <ParallaxFixedSection
        imageUrl="https://images.pexels.com/photos/8650298/pexels-photo-8650298.jpeg"
        className="py-24"
      >
        <div className="container mx-auto px-4" style={{ maxWidth: '1320px', paddingLeft: '80px', paddingRight: '80px' }}>
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight heading-premium text-white">
                Student Testimonials
              </h2>
              <div className="w-24 h-1 mx-auto mb-8 divider-gold" />
              <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed body-premium text-white/90">
                Hear from our successful alumni who are now sailing the seven seas
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Full width marquee sits outside the centered container */}
        <TestimonialsMarquee />
      </ParallaxFixedSection>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-page-white">
        <div className="container mx-auto px-4" style={{ maxWidth: '1320px', paddingLeft: '80px', paddingRight: '80px' }}>
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight heading-premium text-primary-cyan">
                Get in Touch
              </h2>
              <div className="w-24 h-1 mx-auto mb-8 divider-gold" />
              <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed body-premium text-dark-secondary">
                Have questions? We're here to help you start your maritime career
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-cyan">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 uppercase text-lg heading-premium text-accent-gold">
                      Address
                    </h3>
                    <p className="leading-relaxed text-dark-secondary">
                      Aditya Complex, Kochupally road,
                      <br />
                      Next to Anjali Marriage hall,
                      <br />
                      Thoppumpady, Kochi, Kerala - 682005
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-cyan">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 uppercase text-lg heading-premium text-accent-gold">
                      Phone
                    </h3>
                    <p className="text-dark-secondary">Call: +91 484 2234500</p>
                    <p className="text-dark-secondary">Mobile: +91 8484545501</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-cyan">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 uppercase text-lg heading-premium text-accent-gold">
                      Email
                    </h3>
                    <p className="text-dark-secondary">cochinmaritime@gmail.com</p>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="font-bold mb-4 uppercase text-lg heading-premium text-accent-gold">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                      <button key={index} className="p-3 rounded-full hover:scale-110 transition-all bg-cyan">
                        <Icon className="text-white" size={20} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="border-0 shadow-lg" style={{ backgroundColor: 'rgb(245, 243, 239)' }}>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div>
                      <Input placeholder="Your Name *" className="border rounded bg-white text-gray-800" required />
                    </div>
                    <div>
                      <Input type="email" placeholder="Your Email *" className="border rounded bg-white text-gray-800" required />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Your Phone *" className="border rounded bg-white text-gray-800" required />
                    </div>
                    <div>
                      <Select defaultValue="" className="border rounded bg-white text-gray-800">
                        <option value="" disabled>Select a course</option>
                        {courseTitles.map((title) => (
                          <option key={title} value={title}>{title}</option>
                        ))}
                      </Select>
                    </div>
                    <div>
                      <Textarea rows={4} placeholder="Your Message" className="border rounded bg-white text-gray-800" />
                    </div>
                    <button type="submit" className="w-full btn-primary">Send Message</button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 left-8 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all z-40 bg-cyan"
        aria-label="Scroll to top"
      >
        <ChevronRight className="rotate-[-90deg]" size={24} />
      </button>
    </div>
  )
}
