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

export interface PartnerPartner extends Schema.Component {
  collectionName: 'components_partner_partners';
  info: {
    displayName: 'partner';
  };
  attributes: {
    URL: Attribute.String;
    Logo: Attribute.Media;
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

export interface StatsticsRegionalStat extends Schema.Component {
  collectionName: 'components_statstics_regional_stats';
  info: {
    displayName: 'regionalStat';
  };
  attributes: {
    statisticsTitle: Attribute.String;
    Djibouti: Attribute.Float;
    Eritrea: Attribute.Float;
    Ethiopia: Attribute.Float;
    Kenya: Attribute.Float;
    Somalia: Attribute.Float;
    SouthSudan: Attribute.Float;
    Sudan: Attribute.Float;
    Uganda: Attribute.Float;
  };
}

export interface StatsticsStatstics extends Schema.Component {
  collectionName: 'components_statstics_statstics';
  info: {
    displayName: 'homePageStat';
    description: '';
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
      'partner.partner': PartnerPartner;
      'priority-areas.priority-areas': PriorityAreasPriorityAreas;
      'statstics.regional-stat': StatsticsRegionalStat;
      'statstics.statstics': StatsticsStatstics;
    }
  }
}
