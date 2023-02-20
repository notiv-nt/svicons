/** @typedef {typeof __propDef.props}  RedditSquareProps */
/** @typedef {typeof __propDef.events}  RedditSquareEvents */
/** @typedef {typeof __propDef.slots}  RedditSquareSlots */
export default class RedditSquare extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type RedditSquareProps = typeof __propDef.props
export type RedditSquareEvents = typeof __propDef.events
export type RedditSquareSlots = typeof __propDef.slots
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
