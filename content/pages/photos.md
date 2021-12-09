---
title: Photos
sections:
  - elementId: ''
    customClass: ''
    showDate: false
    showAuthor: false
    showExcerpt: false
    variant: variant-b
    actions:
      - type: Button
        label: View All
        altText: View All Posts
        url: /blog
        style: primary
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
    title: Featured
    subtitle: Featured blog posts section example
    colors: colors-h
    posts: []
    type: FeaturedPostsSection
  - type: MediaGallerySection
    colors: colors-a
    title: ''
    subtitle: ''
    images:
      - type: ImageBlock
        url: /images/careers.jpg
        caption: Meeting room
        altText: People in the meeting room
      - type: ImageBlock
        url: /images/post-2.jpg
        caption: Team meeting
        altText: Team meeting
    columns: 2
    spacing: 3
    imageSizePx: 400
    aspectRatio: '1:1'
    showCaption: false
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
          - pb-24
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
layout: PageLayout
---
