import React from 'react';
import {render} from '@testing-library/react';
 
import Card from '../../components/Article/card';



describe('Card', () => {
  let article;
  beforeEach(() => {
    article = {
      slug: "articleSlug",
      title: "articleTitle",
      excerpt: "articleExcerpt",
      image : {
        name : "image-name",
        url : "https://fabrice-web.fr"
      },
      category : {
        name : "category-name"
      }
    };

  });
  test('should render image', () => {
    const {getByText, getByAltText} = render(<Card {...article} />);
    const image = getByText(article.image);
    expect(image).toBeVisible();
});

  // test('renders Card component', () => {
  //   render(<Card {...article} />);
  // });
});