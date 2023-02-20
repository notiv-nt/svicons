/** @typedef {typeof __propDef.props}  TrelloProps */
/** @typedef {typeof __propDef.events}  TrelloEvents */
/** @typedef {typeof __propDef.slots}  TrelloSlots */
export default class Trello extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type TrelloProps = typeof __propDef.props
export type TrelloEvents = typeof __propDef.events
export type TrelloSlots = typeof __propDef.slots
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
