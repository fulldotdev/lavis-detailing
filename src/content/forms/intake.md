---
_schema: default
title: Intake
inputs:
  - _bookshop_name: elements/checkbox
    label: Exterieur detailing
    required: false
  - _bookshop_name: elements/checkbox
    label: Interieur detailing
    required: false
  - _bookshop_name: elements/checkbox
    label: Dagbehandeling
    required: false
  - _bookshop_name: elements/checkbox
    label: Coating
    required: false
  - _bookshop_name: elements/checkbox
    label: Boot detailing en coating
    required: false
  - _bookshop_name: elements/checkbox
    label: Camper detailing en coating
    required: false
  - _bookshop_name: elements/checkbox
    label: Schadeherstel
    required: false
  - _bookshop_name: elements/checkbox
    label: Velgreparatie
    required: false
  - _bookshop_name: elements/input
    label: Email
    type: email
    required: true
  - _bookshop_name: elements/input
    label: Telefoonnummer
    type: tel
    required: false
  - _bookshop_name: elements/textarea
    label: Bericht
    required: false
button:
  _bookshop_name: elements/button
  label: Verstuur
  href: /bericht-ontvangen
---
