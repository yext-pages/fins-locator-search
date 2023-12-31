// locator.tsx

import * as React from "react";
import "../index.css";
import {
  GetHeadConfig,
  GetPath,
  Template,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
// import PageLayout from "../components/PageLayout";
import Locator from "../components/Locator";
import {
  provideHeadless,
  SearchHeadlessProvider,
} from "@yext/search-headless-react";
import {apiKey, experienceKey, locale, experienceVersion} from "../common/consts";

export const getPath: GetPath<TemplateProps> = () => {
  return `index.html`;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = () => {
  return {
    title: "Locator",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const searcher = provideHeadless({
  apiKey: apiKey,
  experienceKey: experienceKey,
  locale: locale,
  verticalKey: "locations",
  experienceVersion: experienceVersion,
});

const Search: Template<TemplateRenderProps> = () => {
  return (
      <SearchHeadlessProvider searcher={searcher}>
        <div className="mx-auto max-w-7xl px-4">
          <Locator />
        </div>
      </SearchHeadlessProvider>
  );
};

export default Search;