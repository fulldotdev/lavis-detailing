---
_schema: default
title: Contact
inputs:
  - _bookshop_name: elements/input
    label: Naam
    type: text
    required: false
  - _bookshop_name: elements/input
    label: Email
    type: email
    required: true
  - _bookshop_name: elements/input
    label: Telefoon
    type: tel
    required: false
  - _bookshop_name: elements/textarea
    label: Bericht
    required: true
button:
  _bookshop_name: elements/button
  label: Verstuur bericht
  href: /bericht-ontvangen
---
