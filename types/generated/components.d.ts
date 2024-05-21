import type { Schema, Attribute } from '@strapi/strapi';

export interface MigrationMigrationData extends Schema.Component {
  collectionName: 'components_migration_migration_data';
  info: {
    displayName: 'MigrationData';
    icon: 'earth';
    description: '';
  };
  attributes: {
    migrant_total: Attribute.BigInteger;
    migrant_male: Attribute.BigInteger;
    migrant_female: Attribute.BigInteger;
    migrant_15_plus: Attribute.BigInteger;
    migrant_15_plus_male: Attribute.BigInteger;
    migrant_15_plus_female: Attribute.BigInteger;
    migrant_labor_force: Attribute.BigInteger;
    migrant_labor_force_male: Attribute.BigInteger;
    migrant_labor_force_female: Attribute.BigInteger;
    migrant_labor_force_youth: Attribute.BigInteger;
    migrant_labor_force_youth_male: Attribute.BigInteger;
    migrant_labor_force_youth_female: Attribute.BigInteger;
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
      'statstics.regional-stat': StatsticsRegionalStat;
      'statstics.statstics': StatsticsStatstics;
    }
  }
}
