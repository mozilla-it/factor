<h1 align="center">Factor</h1>

## Project description

This will be a central repository for internally shared templates and components within Mozilla. This README will be the central location for all documentation relating to our internal components.

## Installation

Run the following command in your terminal

```
npm install --save @mozilla-factor/core
```

Include this in whichever VueJS component you wish to use the template.

```
import { FactorBlockTemplate } from '@mozilla-factor/core';
```

## Usage

Example useage:

```
<FactorBlockTemplate
  :searchBarHandler="searchBarHandler"
  searchBarLabel="Welcome to Factor"
>
  <router-view slot="main" />
  <ProfileNav slot="profile"></ProfileNav>
  <FooterLinks slot="footer-links"></FooterLinks>
</FactorBlockTemplate>
```
