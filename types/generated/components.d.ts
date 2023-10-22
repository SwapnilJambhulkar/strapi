import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogPostsSelection extends Schema.Component {
  collectionName: 'components_blog_posts_selections';
  info: {
    displayName: 'postsSelection';
    icon: 'filter';
  };
  attributes: {
    heading: Attribute.String;
    featuredPosts: Attribute.Relation<
      'blog.posts-selection',
      'oneToMany',
      'api::post.post'
    >;
  };
}

export interface ConfigSocialLink extends Schema.Component {
  collectionName: 'components_config_social_links';
  info: {
    displayName: 'SocialLink';
    icon: 'arrowRight';
  };
  attributes: {
    socialMedia: Attribute.Enumeration<
      ['gihub ', 'twitter ', 'instagram', 'linkedin']
    > &
      Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface LayoutFeaturedComponent extends Schema.Component {
  collectionName: 'components_layout_featured_components';
  info: {
    displayName: 'featuredComponent';
    icon: 'server';
  };
  attributes: {
    course: Attribute.Relation<
      'layout.featured-component',
      'oneToOne',
      'api::course.course'
    >;
  };
}

export interface LayoutHero extends Schema.Component {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'hero';
    icon: 'archive';
    description: '';
  };
  attributes: {
    callToAction: Attribute.String & Attribute.Required;
    image: Attribute.Media;
    buttons: Attribute.Component<'layout.link', true>;
  };
}

export interface LayoutLink extends Schema.Component {
  collectionName: 'components_layout_links';
  info: {
    displayName: 'link';
    icon: 'arrowRight';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface LayoutMission extends Schema.Component {
  collectionName: 'components_layout_missions';
  info: {
    displayName: 'mission';
    icon: 'command';
  };
  attributes: {
    heading: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Our Mission'>;
    content: Attribute.Text & Attribute.Required;
    showLogo: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface LayoutNewsLetterForm extends Schema.Component {
  collectionName: 'components_layout_news_letter_forms';
  info: {
    displayName: 'newsLetterForm';
    icon: 'envelop';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    subHeading: Attribute.Text;
  };
}

export interface LayoutPageinfo extends Schema.Component {
  collectionName: 'components_layout_pageinfos';
  info: {
    displayName: 'Pageinfo';
    icon: 'apps';
  };
  attributes: {
    content: Attribute.RichText;
    cover: Attribute.Media;
    seo: Attribute.Component<'seo.seoinformation'>;
  };
}

export interface LayoutServicesPreview extends Schema.Component {
  collectionName: 'components_layout_services_previews';
  info: {
    displayName: 'servicesPreview';
    icon: 'layout';
  };
  attributes: {
    services: Attribute.Relation<
      'layout.services-preview',
      'oneToMany',
      'api::service.service'
    >;
  };
}

export interface SeoSeoinformation extends Schema.Component {
  collectionName: 'components_seo_seoinformations';
  info: {
    displayName: 'seoinformation';
    icon: 'search';
  };
  attributes: {
    seoTitle: Attribute.String;
    seoDescription: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog.posts-selection': BlogPostsSelection;
      'config.social-link': ConfigSocialLink;
      'layout.featured-component': LayoutFeaturedComponent;
      'layout.hero': LayoutHero;
      'layout.link': LayoutLink;
      'layout.mission': LayoutMission;
      'layout.news-letter-form': LayoutNewsLetterForm;
      'layout.pageinfo': LayoutPageinfo;
      'layout.services-preview': LayoutServicesPreview;
      'seo.seoinformation': SeoSeoinformation;
    }
  }
}
