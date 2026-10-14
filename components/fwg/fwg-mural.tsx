import Image from "next/image"

export function FwgMural() {
  return (
    <figure className="flex flex-col">
      <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[2048/719]">
        <Image
          src="/images/lady-justice-mural.jpg"
          alt="Mural of Lady Justice in silhouette raising balanced scales in front of the Little Rock skyline under a pink and purple sunset"
          fill
          sizes="100vw"
          className="object-cover object-[45%_center]"
        />
      </div>
      <figcaption className="mx-auto w-full max-w-4xl px-6 pt-3 text-sm leading-relaxed text-[#2a1530]/70">
        <span className="font-semibold text-brand-purple">Lady Justice</span> by Joel Boyd. Mural at the UA Little
        Rock William H. Bowen School of Law.
      </figcaption>
    </figure>
  )
}
