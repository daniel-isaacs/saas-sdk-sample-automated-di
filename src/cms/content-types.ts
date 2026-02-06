import {
  contentType,
  displayTemplate,
  initContentTypeRegistry,
  initDisplayTemplateRegistry,
  BlankExperienceContentType,
  BlankSectionContentType,
} from '@optimizely/cms-sdk';

// ============================================================================
// Blocks
// ============================================================================

/**
 * Button
 */
export const ButtonCT = contentType({
  key: 'Button',
  displayName: 'Button',
  baseType: '_component',
  compositionBehaviors: ['sectionEnabled', 'elementEnabled'],
  properties: {
    label: {
      type: 'string',
      displayName: 'TestButton',
      description: '',
      group: 'Information',
      sortOrder: 10,
    },
    buttonUrl: {
      type: 'string',
      format: 'shortString',
      displayName: 'Button URL',
      description: 'Button link',
      group: 'Information',
      sortOrder: 20,
    },
  },
});

/**
 * Heading2
 *
 * Heading2
 */
export const Heading2CT = contentType({
  key: 'Heading2',
  displayName: 'Heading2',
  description: 'Heading2',
  baseType: '_component',
  properties: {
    Heading2: {
      type: 'string',
      format: 'shortString',
      displayName: 'TextHeading',
      description: '',
      group: 'Information',
      indexingType: 'queryable',
      maxLength: 100,
    },
  },
});

/**
 * Heading
 */
export const HeadingCT = contentType({
  key: 'Heading',
  displayName: 'Heading',
  baseType: '_component',
  compositionBehaviors: ['sectionEnabled', 'elementEnabled'],
  properties: {
    heading: {
      type: 'string',
      displayName: 'Heading Text',
      description: '',
      group: 'Information',
    },
  },
});

// ============================================================================
// Pages
// ============================================================================

/**
 * Index Page
 *
 * Index Page Template
 */
export const IndexPageCT = contentType({
  key: 'IndexPage',
  displayName: 'Index Page',
  description: 'Index Page Template',
  baseType: '_page',
  properties: {
    CB: {
      type: 'array',
      displayName: 'CB',
      description: '',
      group: 'Information',
      items: {
        type: 'content',
        allowedTypes: ['_component'],
        restrictedTypes: [],
      },
    },
    Navigation: {
      type: 'component',
      contentType: 'Button',
      displayName: 'Load Products',
      description: '',
      group: 'Information',
    },
    ContentBlock: {
      type: 'array',
      displayName: 'Content Block',
      description: '',
      group: 'Information',
      sortOrder: 1,
      items: {
        type: 'content',
        allowedTypes: [],
        restrictedTypes: [],
      },
    },
    TextArea: {
      type: 'richText',
      displayName: 'Text Area',
      description: '',
      group: 'Information',
      sortOrder: 2,
    },
  },
});

// ============================================================================
// Registry
// ============================================================================

/**
 * Array of all content types for registry initialization
 */
export const allContentTypes = [
  // Built-in experience types
  BlankExperienceContentType,
  BlankSectionContentType,
  // Blocks
  ButtonCT,
  Heading2CT,
  HeadingCT,
  // Pages
  IndexPageCT,
];

/**
 * Array of all display templates for registry initialization
 */
export const allDisplayTemplates = [
];

/**
 * Initialize all registries
 * Call this in your root layout before rendering CMS content
 */
export function initAllRegistries() {
  initContentTypeRegistry(allContentTypes);
  initDisplayTemplateRegistry(allDisplayTemplates);
}
