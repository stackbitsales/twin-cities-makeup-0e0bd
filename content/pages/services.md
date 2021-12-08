---
title: Services
sections:
  - colors: colors-a
    elementId: ''
    customClass: ''
    title: Services
    subtitle: >-
      Lisa and her highly skilled team of makeup artists and hairstylists offer
      personalized makeup applications and creative hairstyling. Our specialty
      areas include Hi-Def makeup and hair artistry for photography and video.
      Areas of expertise in addition to bridal looks also include runway,
      fashion shows, special event styling, and personal makeup lessons.
    items:
      - type: FeaturedItem
        title: In-Studio Services
        text: >+
          Personal makeup lessons, makeup/hair consults for bridal clients, and
          prom and special event makeup and hairstyling.

        featuredImage: null
        styles:
          title:
            textAlign: center
          subtitle:
            textAlign: center
          text:
            textAlign: center
      - type: FeaturedItem
        title: On-Location Services
        text: >
          Makeup and hair stylist for brides and their bridal parties, airbrush
          makeup and traditional applications, professional certified makeup
          artist and licensed stylist, updos and general hair styling, special
          occasions clip-in extensions placed.
        featuredImage: null
        styles:
          title:
            textAlign: center
          subtitle:
            textAlign: center
          text:
            textAlign: center
    actions: []
    columns: 2
    enableHover: false
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
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: center
    type: FeaturedItemsSection
  - type: FeatureHighlightSection
    colors: colors-f
    backgroundSize: inset
    title: Where did everyone go?
    text: >-
      Learn how top tech companies have learned working remote using our
      product.
    badge:
      type: Badge
      label: Case study
      styles:
        self:
          textAlign: left
    actions:
      - type: Button
        label: Get Started
        url: /
        style: primary
      - type: Link
        label: Watch Video
        url: /
        style: link
        showIcon: true
        icon: playCircle
        iconPosition: left
    media:
      type: ImageBlock
      url: /images/hero-3.jpg
      altText: Team meeting
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-20
          - ml-4
          - mr-4
        padding:
          - pt-24
          - pb-16
          - pl-16
          - pr-16
        justifyContent: center
        flexDirection: row
        alignItems: center
        borderRadius: xx-large
        boxShadow: xx-large
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
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
