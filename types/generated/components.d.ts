import type { Schema, Attribute } from '@strapi/strapi';

export interface MigrationMigrationData extends Schema.Component {
  collectionName: 'components_migration_migration_data';
  info: {
    displayName: 'MigrationData';
    icon: 'earth';
    description: '';
  };
  attributes: {
    migrant_total: Attribute.Float;
    migrant_male: Attribute.Float;
    migrant_female: Attribute.Float;
    migrant_15_plus: Attribute.Float;
    migrant_15_plus_male: Attribute.Float;
    migrant_15_plus_female: Attribute.Float;
    migrant_labor_force: Attribute.Float;
    migrant_labor_force_male: Attribute.Float;
    migrant_labor_force_female: Attribute.Float;
    migrant_labor_force_youth: Attribute.Float;
    migrant_labor_force_youth_male: Attribute.Float;
    migrant_labor_force_youth_female: Attribute.Float;
    year: Attribute.Date;
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

export interface PopulationPopulationData extends Schema.Component {
  collectionName: 'components_population_population_data';
  info: {
    displayName: 'populationData';
  };
  attributes: {
    year: Attribute.Date;
    male: Attribute.BigInteger;
    female: Attribute.BigInteger;
  };
}

export interface PriorityAreasActionItemList extends Schema.Component {
  collectionName: 'components_priority_areas_action_item_lists';
  info: {
    displayName: 'ActionItemList';
    description: '';
  };
  attributes: {
    item: Attribute.Text;
  };
}

export interface PriorityAreasActionItems extends Schema.Component {
  collectionName: 'components_priority_areas_action_items';
  info: {
    displayName: 'ActionItems';
    description: '';
  };
  attributes: {
    ActionTitle: Attribute.String;
    actionItemList: Attribute.Component<
      'priority-areas.action-item-list',
      true
    >;
  };
}

export interface PriorityAreasLinks extends Schema.Component {
  collectionName: 'components_priority_areas_links';
  info: {
    displayName: 'links';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
  };
}

export interface RefugeeRefugeeData extends Schema.Component {
  collectionName: 'components_refugee_refugee_data';
  info: {
    displayName: 'refugeeData';
    icon: 'handHeart';
  };
  attributes: {
    year: Attribute.Date;
    age_group: Attribute.Enumeration<
      ['age 0-4', 'age 5-11', 'age 12-17', 'age 18-59', 'age 60+']
    > &
      Attribute.Required;
    male: Attribute.Float;
    female: Attribute.Float;
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
      'migration.migration-data': MigrationMigrationData;
      'partner.partner': PartnerPartner;
      'population.population-data': PopulationPopulationData;
      'priority-areas.action-item-list': PriorityAreasActionItemList;
      'priority-areas.action-items': PriorityAreasActionItems;
      'priority-areas.links': PriorityAreasLinks;
      'refugee.refugee-data': RefugeeRefugeeData;
      'statstics.regional-stat': StatsticsRegionalStat;
      'statstics.statstics': StatsticsStatstics;
    }
  }
}
