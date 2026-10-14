"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

export function FwgReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={visible ? "fwg-reveal is-visible" : "fwg-reveal"}>
      {children}
    </div>
  )
}
