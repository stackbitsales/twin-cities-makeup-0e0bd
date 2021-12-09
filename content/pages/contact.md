---
title: Contact
sections:
  - elementId: ''
    customClass: ''
    colors: colors-a
    title: Contact Us
    subtitle: ''
    badge:
      label: Lisa Reinhardt Makeup and Hair Artistry
      elementId: ''
      styles:
        self:
          textAlign: left
    text: "Call us at **(763) 656-8688**. Or email us at **colormebeautiful01@yahoo.com**.\n\nOr visit us at 7860 Vinewood LN N, Suite #20, Maple Grove,\_MN\_55369. We are located inside Salons by JC. In-Studio is by appointment only\n"
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
  - colors: colors-a
    elementId: ''
    customClass: ''
    type: MapSection
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
          name: first-name
          placeholder: Your first name
          isRequired: true
          width: 1/2
          label: Your first name
          hideLabel: true
        - type: EmailFormControl
          name: email
          placeholder: Your email address
          isRequired: true
          width: 1/2
          label: Your email address
          hideLabel: true
        - name: phone
          hideLabel: true
          placeholder: Your phone number
          isRequired: true
          width: full
          type: TextFormControl
          label: Your phone number
        - name: reason-for-contact
          hideLabel: true
          options:
            - Service request
            - General comment/question
            - Submit a testimonial
          isRequired: true
          width: full
          type: SelectFormControl
          defaultValue: Reason for contact?
          label: Reason for contact?
        - name: service-type
          label: Type of Service
          hideLabel: true
          defaultValue: Type of service?
          options:
            - Wedding
            - Other
          isRequired: false
          width: full
          type: SelectFormControl
        - type: TextFormControl
          name: date-of-service
          placeholder: Your date of service
          isRequired: true
          width: full
          label: Date of service?
          hideLabel: true
        - name: comments-questions
          hideLabel: true
          placeholder: Comments/questions
          isRequired: false
          width: full
          type: TextareaFormControl
          label: Comments/questions
        - name: referral-source
          hideLabel: false
          placeholder: How did you hear about us?
          isRequired: true
          width: full
          type: TextFormControl
          label: How did you hear about us
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
