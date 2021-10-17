import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Chunky Chickens',
  description:
    'Chunky Chickens',
  image: '',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Chunky Chickens')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Chunky Chickens')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Chunky Chickens')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Chunky Chickens')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Chunky Chickens')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Chunky Chickens')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('Chunky Chickens')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Chunky Chickens')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Chunky Chickens')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('Chunky Chickens')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('Chunky Chickens')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('Chunky Chickens Info & Analytics')}`,
        description: 'View statistics for Chunky Chickens exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('Chunky Chickens Info & Analytics')}`,
        description: 'View statistics for Chunky Chickens exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Pools')} | ${t('Chunky Chickens Info & Analytics')}`,
        description: 'View statistics for Chunky Chickens exchanges.',
      }
    default:
      return null
  }
}
