---
title: Contact
sections:
  - elementId: ''
    customClass: ''
    colors: colors-a
    title: Lisa Reinhardt Makeup and Hair Artistry
    subtitle: ''
    badge:
      label: COntact
      elementId: ''
      styles:
        self:
          textAlign: left
    text: "Call us at **(763) 656-8688**. Or email us at **colormebeautiful01@yahoo.com**.\n\nOr visit us at 7860 Vinewood LN N, Suite #20, Maple Grove,\_MN\_55369. We are located inside Salons by JC. In-Studio is by appointment only\n"
    actions: []
    media:
      type: ImageBlock
      url: /images/hero.png
      altText: Hero image
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
        flexDirection: row
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
    colors: colors-h
    backgroundSize: inset
    title: Contact us
    form:
      type: FormBlock
      elementId: contact-form
      action: /.netlify/functions/submission_created
      destination: ''
      fields:
        - type: TextFormControl
          name: name
          placeholder: Your name
          isRequired: 'true'
          width: 1/2
        - name: home-address
          hideLabel: false
          placeholder: Your home address
          isRequired: false
          width: full
          type: TextFormControl
        - type: EmailFormControl
          name: email
          placeholder: Your email
          isRequired: 'true'
          width: 1/2
        - name: home-address
          hideLabel: false
          placeholder: Your home address
          isRequired: false
          width: full
          type: TextFormControl
        - name: reason-for-contact
          hideLabel: false
          defaultValue: Please choose...
          options:
            - New York
            - San Francisco
          isRequired: false
          width: full
          type: SelectFormControl
        - name: type-wedding
          label: Wedding
          isRequired: false
          width: full
          type: CheckboxFormControl
        - type: CheckboxFormControl
          name: type-other
          label: Other service
          isRequired: false
          width: full
        - type: TextFormControl
          name: date-of-service
          placeholder: Date of service
          isRequired: true
          width: full
        - name: comments-questions
          hideLabel: false
          placeholder: Comments/questions
          isRequired: false
          width: full
          type: TextareaFormControl
        - name: referral-source
          hideLabel: false
          placeholder: How did you hear about us?
          isRequired: false
          width: full
          type: TextFormControl
      submitLabel: Send Message
    media: null
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-9
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
