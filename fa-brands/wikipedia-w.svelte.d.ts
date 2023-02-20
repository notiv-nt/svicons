/** @typedef {typeof __propDef.props}  WikipediaWProps */
/** @typedef {typeof __propDef.events}  WikipediaWEvents */
/** @typedef {typeof __propDef.slots}  WikipediaWSlots */
export default class WikipediaW extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type WikipediaWProps = typeof __propDef.props
export type WikipediaWEvents = typeof __propDef.events
export type WikipediaWSlots = typeof __propDef.slots
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
