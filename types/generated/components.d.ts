import type { Schema, Attribute } from '@strapi/strapi';

export interface HeroSectionHeroSection extends Schema.Component {
  collectionName: 'components_hero_section_hero_sections';
  info: {
    displayName: 'hero-section';
  };
  attributes: {
    heroTitle: Attribute.String;
    heroDescription: Attribute.Text;
    BackgroundImage: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'hero-section.hero-section': HeroSectionHeroSection;
    }
  }
}
