import type { Schema, Attribute } from '@strapi/strapi';

export interface EventContact extends Schema.Component {
  collectionName: 'components_event_contacts';
  info: {
    displayName: 'contact';
    icon: 'envelop';
  };
  attributes: {
    email: Attribute.String;
    phone: Attribute.String;
    website: Attribute.String;
  };
}

export interface MigrationMigrant extends Schema.Component {
  collectionName: 'components_migration_migrants';
  info: {
    displayName: 'migrant';
    icon: 'emotionHappy';
    description: '';
  };
  attributes: {
    male: Attribute.Float;
    female: Attribute.Float;
  };
}

export interface MigrationMigrationData extends Schema.Component {
  collectionName: 'components_migration_migration_data';
  info: {
    displayName: 'MigrationData';
    icon: 'earth';
    description: '';
  };
  attributes: {
    year: Attribute.Date;
    migrants_15_plus: Attribute.Component<'migration.migrant'>;
    labor_force_migrants: Attribute.Component<'migration.migrant'>;
    youth_labor_force_migrants: Attribute.Component<'migration.migrant'>;
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

export interface PolicySection extends Schema.Component {
  collectionName: 'components_policy_sections';
  info: {
    displayName: 'section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
    subSection: Attribute.Component<'policy.sub-section', true>;
    files: Attribute.Media;
  };
}

export interface PolicySubSection extends Schema.Component {
  collectionName: 'components_policy_sub_sections';
  info: {
    displayName: 'subSection';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
  };
}

export interface PopulationPopulationData extends Schema.Component {
  collectionName: 'components_population_population_data';
  info: {
    displayName: 'populationData';
    description: '';
  };
  attributes: {
    year: Attribute.Date;
    male: Attribute.BigInteger;
    female: Attribute.BigInteger;
    male15plus: Attribute.BigInteger;
    female15plus: Attribute.BigInteger;
  };
}

export interface PopulationPopulation extends Schema.Component {
  collectionName: 'components_population_populations';
  info: {
    displayName: 'population';
    icon: 'emotionHappy';
  };
  attributes: {
    year: Attribute.Date;
    age_group: Attribute.Enumeration<
      [
        'age 0-4',
        'age 5-9',
        'age 10-14',
        'age 15-19',
        'age 20-24',
        'age 25-29',
        'age 30-34',
        'age 35-39',
        'age 40-44',
        'age 45-49',
        'age 50-54',
        'age 55-59',
        'age 60-64',
        'age 65-69',
        'age 70-74',
        'age 75-79',
        'age 80+'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'age 0-4'>;
    male: Attribute.Float;
    female: Attribute.Float;
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

export interface RemittanceRemittance extends Schema.Component {
  collectionName: 'components_remittance_remittances';
  info: {
    displayName: 'Remittance';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    region: Attribute.String & Attribute.DefaultTo<'East Africa'>;
    amount: Attribute.Float;
    year: Attribute.Date;
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

export interface TimeSpanDuration extends Schema.Component {
  collectionName: 'components_time_span_durations';
  info: {
    displayName: 'duration';
    icon: 'clock';
  };
  attributes: {
    from: Attribute.Date;
    to: Attribute.Date;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'event.contact': EventContact;
      'migration.migrant': MigrationMigrant;
      'migration.migration-data': MigrationMigrationData;
      'partner.partner': PartnerPartner;
      'policy.section': PolicySection;
      'policy.sub-section': PolicySubSection;
      'population.population-data': PopulationPopulationData;
      'population.population': PopulationPopulation;
      'priority-areas.action-item-list': PriorityAreasActionItemList;
      'priority-areas.action-items': PriorityAreasActionItems;
      'priority-areas.links': PriorityAreasLinks;
      'refugee.refugee-data': RefugeeRefugeeData;
      'remittance.remittance': RemittanceRemittance;
      'statstics.regional-stat': StatsticsRegionalStat;
      'statstics.statstics': StatsticsStatstics;
      'time-span.duration': TimeSpanDuration;
    }
  }
}
