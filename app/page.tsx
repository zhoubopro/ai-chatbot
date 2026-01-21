"use client";

import { useState } from "react";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Code2,
  Menu,
  X,
  FileText,
  MessageSquare,
  Lightbulb,
  Target,
  Play,
} from "lucide-react";
import Link from "next/link";

const techStack = ["React", "Vue", "TypeScript", "Node.js", "算法", "系统设计"];

const features = [
  {
    icon: FileText,
    title: "简历优化",
    description:
      "AI 智能分析你的简历，提供针对性的优化建议，突出技术亮点，让你的简历脱颖而出。",
  },
  {
    icon: MessageSquare,
    title: "模拟面试",
    description:
      "还原真实面试场景，从自我介绍到技术深挖，全流程模拟，帮你提前适应面试节奏。",
  },
  {
    icon: Lightbulb,
    title: "面试题解答",
    description:
      "覆盖前端基础、框架原理、算法编程等领域，提供详细解答和思路分析。",
  },
  {
    icon: Target,
    title: "针对性训练",
    description:
      "根据你的目标公司和岗位，定制面试准备计划，精准提升你的竞争力。",
  },
];

const demos = [
  {
    id: 1,
    title: "简历优化",
    description: "AI 智能分析简历，给出专业优化建议",
    gif: "/demos/resume-optimization.gif",
  },
  {
    id: 2,
    title: "模拟面试",
    description: "真实还原面试场景，全流程模拟训练",
    gif: "/demos/mock-interview.gif",
  },
  {
    id: 3,
    title: "面试题解答",
    description: "详细解析各类面试题目，深入理解原理",
    gif: "/demos/question-answer.gif",
  },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDemo, setActiveDemo] = useState(0);
  const nodeEnv = process.env.NODE_ENV || 'development'

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <span className="font-semibold text-foreground">AI 面试官</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <a
                href="#features"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                功能介绍
              </a>
              <a
                href="#demos"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                功能演示
              </a>
              <Button asChild size="sm">
                <Link href="/login">登录</Link>
              </Button>
            </div>

            <button
              type="button"
              className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "关闭菜单" : "打开菜单"}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                <a
                  href="#features"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  功能介绍
                </a>
                <a
                  href="#demos"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  功能演示
                </a>
                <Button asChild size="sm" className="w-full">
                  <Link href="/login">登录</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float animate-pulse-glow" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-delayed animate-pulse-glow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl animate-pulse-glow" />
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 hover:border-primary/50 transition-colors duration-300">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">
                AI 驱动的智能面试助手
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
              <span className="animate-fade-in-up animation-delay-100 inline-block text-foreground">
                你的专属
              </span>
              <br />
              <span className="animate-fade-in-up animation-delay-200 inline-block text-primary relative">
                AI 面试官
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 rounded-full animate-fade-in animation-delay-500" />
              </span>
            </h1>

            <p className="animate-fade-in-up animation-delay-300 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
              专注编程领域，尤其前端开发。从简历优化到模拟面试，再到面试题解答，
              全方位助力你的求职之路，轻松斩获心仪 Offer。
            </p>

            <div className="animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-base px-8 group transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                <Link href="/chat">
                  开始对话
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base px-8 bg-transparent transition-all duration-300 hover:bg-secondary hover:border-primary/50"
              >
                <a href="#features">了解功能</a>
              </Button>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <span
                  key={tech}
                  className="animate-fade-in-up px-3 py-1.5 text-sm bg-secondary/50 border border-border rounded-md text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                全方位面试辅导
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                无论你是应届生还是社招候选人，我们都能为你提供专业的面试支持
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demos" className="py-24 px-4 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                功能演示
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                看看 AI 面试官如何帮助你准备面试
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              {demos.map((demo, index) => (
                <button
                  key={demo.id}
                  onClick={() => setActiveDemo(index)}
                  className={`p-6 rounded-xl text-left transition-all duration-300 ${
                    activeDemo === index
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        activeDemo === index
                          ? "bg-primary-foreground/20"
                          : "bg-primary/10"
                      }`}
                    >
                      <Play
                        className={`w-5 h-5 ${
                          activeDemo === index
                            ? "text-primary-foreground"
                            : "text-primary"
                        }`}
                      />
                    </div>
                    <h3 className="font-semibold">{demo.title}</h3>
                  </div>
                  <p
                    className={`text-sm ${
                      activeDemo === index
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground"
                    }`}
                  >
                    {demo.description}
                  </p>
                </button>
              ))}
            </div>

            {/* GIF Display Area */}
            <div className="relative aspect-video rounded-2xl bg-card border border-border overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-secondary/50">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <Play className="w-10 h-10 text-primary" />
                </div>
                <p className="text-muted-foreground text-center px-4">
                  <span className="block font-medium text-foreground mb-1">
                    {demos[activeDemo].title}
                  </span>
                  <span className="text-sm">
                    将你的 GIF 文件放置在{" "}
                    <code className="px-2 py-0.5 bg-card rounded text-xs">
                      public/demos/
                    </code>{" "}
                    目录下
                  </span>
                </p>
              </div>
              {/* Uncomment below and add your GIF files */}
              {/* <img
                src={demos[activeDemo].gif || "/placeholder.svg"}
                alt={demos[activeDemo].title}
                className="w-full h-full object-cover"
              /> */}
            </div>

            {/* Mobile GIF list */}
            <div className="mt-8 lg:hidden space-y-4">
              {demos.map((demo) => (
                <div
                  key={demo.id}
                  className="rounded-xl bg-card border border-border overflow-hidden"
                >
                  <div className="aspect-video bg-secondary/50 flex items-center justify-center">
                    <div className="text-center px-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <Play className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {demo.title} 演示
                      </p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-1">
                      {demo.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {demo.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-12 md:p-16 rounded-3xl bg-card border border-border relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  准备好开始了吗？
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                  无论你是刚开始准备面试，还是即将参加面试，AI
                  面试官都能帮助你更好地准备
                </p>
                <Button asChild size="lg" className="text-base px-8">
                  <Link href="/chat">
                    立即开始对话
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-primary" />
            </div>
            <span className="font-semibold text-foreground">AI 面试官</span>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            基于 Vercel AI Chatbot 构建 · 专注前端面试辅导
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#features"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              功能
            </a>
            <a
              href="/chat"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              开始对话
            </a>
          </div>
        </div>
      </footer>

      {/* baidu tongji on production env */}
      {nodeEnv === 'production' && (
        <Script
          id="baidu-tongji-script"
          dangerouslySetInnerHTML={{
            __html: `
              var _hmt = _hmt || [];
              (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?6cca6ed73cc714328d211d61684938e0";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
              })();
            `,
          }}
        />
      )}
    </div>
  );
}
