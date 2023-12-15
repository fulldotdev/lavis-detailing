---
_schema: default
title: Intake
inputs:
  - _bookshop_name: elements/select
    label: Maak één of meerdere keuzes
    options:
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
  - _bookshop_name: elements/button
    label: Verstuur
    href: /bedankt
---
