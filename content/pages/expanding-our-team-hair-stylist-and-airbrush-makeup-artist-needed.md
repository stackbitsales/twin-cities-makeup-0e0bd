---
title: Expanding Our Team
sections:
  - elementId: ''
    customClass: ''
    colors: colors-h
    title: Now seeking experienced hair stylists and makeup artists
    subtitle: ''
    badge:
      label: Expanding Our team
      elementId: ''
      styles:
        self:
          textAlign: left
    text: "Currently seeking new talent for our expanding team! If you want to work in a great environment with lots of friendly girls and wonderful clients please fill out the form below. You will need\_**availability\_**for at least 1 Saturday a month and some Friday’s & Sunday’s.\n\n*   Airbrush Makeup Artist (Must own airbrush machine/ water based airbrush foundation\_AND have previous airbrush training)\n\n*   Hair Stylist (2-4 years of updo styling\_experience is required)\n\n*   Prior experience with Brides and their bridal parties is a must (portfolio\_pictures will be\_required)\n\n*   Technical interview will be set up after contacted; you will need to supply\_your own\_model\n"
    actions: []
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
        alignItems: center
        justifyContent: center
        flexDirection: col
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: HeroSection
  - type: ContactSection
    colors: colors-f
    backgroundSize: inset
    title: Not seeing the right role? Contact us
    text: >-
      We might have more roles soon, and we’ll contact you if we think there
      might be a good match
    form:
      type: FormBlock
      elementId: contact-form
      action: /.netlify/functions/submission_created
      destination: ''
      fields:
        - type: TextFormControl
          name: name
          placeholder: Your name
          isRequired: true
          width: 1/2
          label: Name
          hideLabel: true
        - type: EmailFormControl
          name: email
          placeholder: Your email
          isRequired: true
          width: 1/2
          hideLabel: true
          label: Email
        - name: phone
          hideLabel: true
          placeholder: Your phone number
          isRequired: true
          width: full
          type: TextFormControl
          label: Phone
        - name: city
          label: City
          hideLabel: false
          defaultValue: Please choose...
          options:
            - New York
            - San Francisco
          isRequired: false
          width: full
          type: SelectFormControl
        - name: city
          label: City
          hideLabel: false
          defaultValue: Please choose...
          options:
            - New York
            - San Francisco
          isRequired: false
          width: full
          type: SelectFormControl
        - name: city
          label: City
          hideLabel: false
          defaultValue: Please choose...
          options:
            - New York
            - San Francisco
          isRequired: false
          width: full
          type: SelectFormControl
        - name: experience-with-brides
          label: Do you have experience working with brides?
          hideLabel: true
          defaultValue: Do you have experience working with brides?
          options:
            - New York
            - San Francisco
          isRequired: false
          width: full
          type: SelectFormControl
        - name: available-on-saturdays
          label: Are you available on Saturdays?
          hideLabel: true
          defaultValue: Please choose...
          options:
            - All
            - Most
            - Sometimes
          isRequired: false
          width: full
          type: SelectFormControl
        - name: photos-of-work
          label: Can you provide current photos of your work?
          hideLabel: true
          defaultValue: Can you provide current photos of your work?
          options:
            - 'Yes, I can provide links to an online gallery'
            - 'Yes, I have photos I can email'
            - 'No'
          isRequired: false
          width: full
          type: SelectFormControl
        - name: links-to-online-work
          label: Links to Online Work
          hideLabel: true
          placeholder: >-
            Please provide a link(s) to your current work (i.e. Facebook,
            Flickr, website, online gallery, etc).
          isRequired: false
          width: full
          type: TextareaFormControl
        - name: additional-comments
          label: Additional Comments
          hideLabel: true
          placeholder: Write any additional comments
          isRequired: false
          width: full
          type: TextareaFormControl
      submitLabel: Send Message
    media: null
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-12
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
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
