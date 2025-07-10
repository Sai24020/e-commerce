// Basic Favourite page

import type { Metadata } from 'next'
import FavoritePage from '../components/favorite/favorite-page';

 
export const metadata: Metadata = {
  title: {
    default: 'Favorite', // a default is required when creating a template
    template: '%s | FAVORITE'
    },
  }
export default function FavPage() {

    return (
      <FavoritePage />
    );
  }

