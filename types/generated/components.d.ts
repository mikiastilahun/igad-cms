import type { Schema, Attribute } from '@strapi/strapi';

export interface HeroSectionHeroSection extends Schema.Component {
  collectionName: 'components_hero_section_hero_sections';
  info: {
    displayName: 'hero-section';
    description: '';
  };
  attributes: {
    heroTitle: Attribute.String;
    heroDescription: Attribute.Text;
    BackgroundImage: Attribute.Media;
  };
}

export interface PriorityAreasPriorityAreas extends Schema.Component {
  collectionName: 'components_hero_section_priority_areas';
  info: {
    displayName: 'priorityAreas';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    icon: Attribute.Media;
    description: Attribute.Text;
  };
}

export interface StatsticsStatstics extends Schema.Component {
  collectionName: 'components_statstics_statstics';
  info: {
    displayName: 'statstics';
  };
  attributes: {
    label: Attribute.String;
    value: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'hero-section.hero-section': HeroSectionHeroSection;
      'priority-areas.priority-areas': PriorityAreasPriorityAreas;
      'statstics.statstics': StatsticsStatstics;
    }
  }
}
