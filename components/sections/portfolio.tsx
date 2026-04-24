"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ZoomIn, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "A full-featured e-commerce solution with AI-powered product recommendations and chatbot support.",
    image: "/jogkar.png",
    tags: ["Next.js", "AI", "Stripe"],
  },
  {
    title: "Healthcare Dashboard",
    category: "Dashboard",
    description:
      "Real-time patient monitoring dashboard with predictive analytics and automated alerts.",
    image:
      "/fabrico.png",
    tags: ["React", "Analytics", "Real-time"],
  },
  {
    title: "WhatsApp Automation",
    category: "AI Automation",
    description:
      "Intelligent WhatsApp bot handling 10,000+ customer inquiries daily with 95% resolution rate.",
    image:
      "/cemsfull.png",
    tags: ["AI", "WhatsApp", "NLP"],
  },
  {
    title: "SaaS Landing Page",
    category: "Web Development",
    description:
      "High-converting landing page with animated components and optimized performance.",
    image:
      "/portal.png",
    tags: ["Design", "Animation", "SEO"],
  },
];

export function PortfolioSection() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section id="portfolio" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-primary mb-4 block">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Projects That <span className="gradient-text">Drive Results</span>
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            Explore a selection of our recent work, showcasing our approach to
            building modern, efficient digital solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
/>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                  {/* Hover Overlay with action buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Zoom icon — top-right corner */}
                    <button
                      onClick={() =>
                        setSelectedImage({ src: project.image, title: project.title })
                      }
                      className="absolute top-3 right-3 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-primary hover:scale-110 transition-all duration-200"
                      title="View full image"
                    >
                      <ZoomIn className="h-4 w-4" />
                    </button>

                    {/* Center action buttons */}
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 text-pretty">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-5 w-5" />
            </button>

            {/* Image */}
            <motion.img
              src={selectedImage.src}
              alt={selectedImage.title}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-[90vw] max-h-[85vh] object-contain  rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Title */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm tracking-wide">
              {selectedImage.title}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}