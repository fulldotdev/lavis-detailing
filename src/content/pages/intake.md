---
title: Plan een intake | Lavis Detailing Sneek
seo:
  title: Plan een intake | Lavis Detailing Sneek
sections:
  - block: contact-1
    html: >
      <h1>Waarin heeft u interesse?</h1>
      <p>Geef hieronder aan in welke diensten u interesse heeft. Uiteraard denken we mee in wat wij denken wat uw auto het beste kan gebruiken. Op basis hiervan geven we een prijsindicatie.</p>
    form:
      inbox: your-inbox-id
      action: /intake-ontvangen/
      fields:
        - name: name
          type: text
          label: Naam
          required: false
        - name: email
          type: email
          label: Email
          required: true
        - name: phone
          type: tel
          label: Telefoon
          required: true
        - name: service
          type: select
          label: Welke diensten interesseren u?
          required: true
          options:
            - Exterieur Detailing
            - Interieur Detailing
            - Dagbehandeling
            - Coating
            - Boot Detailing
            - Camper Detailing
            - Schadeherstel
            - Velgreparatie
        - name: message
          type: textarea
          label: Bericht
          required: true
      submit: Verstuur aanvraag
---
