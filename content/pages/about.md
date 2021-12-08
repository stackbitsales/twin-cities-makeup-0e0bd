---
title: Meet Lisa
sections:
  - type: HeroSection
    colors: colors-a
    title: 'Look gorgeous, feel beautiful, be you!'
    actions:
      - type: Button
        label: Book now
        url: /
        style: primary
    media:
      type: ImageBlock
      url: /images/twin-cities-makeup-artist-kristen.jpeg
      altText: Hero section image
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-12
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-36
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    text: "Lisa Reinhardt Makeup & Hair Artistry has been rated by local brides and voted\_*“The Knot Best of Weddings 2011-2021”*\_**(10 Years And Counting!)**\_We are the\_**#1 on-location Makeup & Hair\_service offered for\_Weddings\_in\_the Minneapolis and St Paul\_area**.\_\n\n[Read our glowing online reviews from real Brides](https://www.twincitiesmakeup.com/raves/), see our\_awards\_and experience our\_top notch\_service! See why 100’s of Brides voted us one of the Best Beauty Vendors in the entire country!\n"
  - type: TestimonialsSection
    colors: colors-a
    variant: variant-a
    title: ''
    subtitle: ''
    testimonials:
      - quote: >-
          ## Such a great experience to be using this product. It really helped
          with what I needed help with.
        name: Carla Rogers
        title: Happy customer
        image:
          type: ImageBlock
          url: /images/carla.jpg
          altText: Photo of Carla Rogers
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-28
          - pb-36
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
  - type: ContactSection
    colors: colors-f
    backgroundSize: inset
    title: Get early access
    text: >-
      Sign up your team today to be the first to try out our new product to
      increase your team's productivity.
    form:
      type: FormBlock
      elementId: sign-up-form
      action: /.netlify/functions/submission_created
      destination: ''
      fields:
        - type: EmailFormControl
          name: email
          label: Email
          hideLabel: true
          placeholder: Your email
          isRequired: 'true'
          width: full
      submitLabel: Sign Up
      styles:
        submitLabel:
          textAlign: center
    media: null
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-24
          - mb-0
          - ml-4
          - mr-4
        padding:
          - pt-24
          - pb-24
          - pl-12
          - pr-12
        alignItems: center
        justifyContent: center
        flexDirection: row
        borderRadius: xx-large
        boxShadow: xx-large
      title:
        textAlign: center
      text:
        textAlign: center
layout: PageLayout
---
