/** @typedef {typeof __propDef.props}  RedditAlienProps */
/** @typedef {typeof __propDef.events}  RedditAlienEvents */
/** @typedef {typeof __propDef.slots}  RedditAlienSlots */
export default class RedditAlien extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type RedditAlienProps = typeof __propDef.props
export type RedditAlienEvents = typeof __propDef.events
export type RedditAlienSlots = typeof __propDef.slots
import { SvelteComponentTyped } from 'svelte'
declare const __propDef: {
  props: {
    [x: string]: any
  }
  events: {
    [evt: string]: CustomEvent<any>
  }
  slots: {}
}
export {}
