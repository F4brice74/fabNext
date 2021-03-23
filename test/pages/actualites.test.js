import React from 'react';
import { render, cleanup, findByTestId, findByText } from '@testing-library/react'
import Actualites from "../../pages/actualites";
import ARTICLES_QUERY from "../../queries/articles/articles-query";
import { MockedProvider } from '@apollo/client/testing';

const mocks = [
    
  ]

  afterEach(cleanup)

  const request = {
      query: ARTICLES_QUERY,
  }
  
  test('render actualites page', async () => {
    // const data = await mockMang(ARTICLES_QUERY); 
    const {articles}= data;
    const {getByTestId, getAllByTestId} = 
    render(
        <MockedProvider mocks= {[
        {
      request: {
        query: ARTICLES_QUERY,
      },
      result: {
          data : {
          articles: {
            id : "article id",
            title : "article title",
            content : "article content",
            slug : "article slug",
            excerpt : "article excerpt",
            category : {
                id: "category id",
                name : "category name"
            },
            image: {
                url: "image url"
                 },
            createdAt : "article createdAt"
          }
        }
      }
    }]}
        addTypename={false}>
        <Actualites articles={articles}/>
        </MockedProvider>
  );
});

