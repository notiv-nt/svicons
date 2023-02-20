/** @typedef {typeof __propDef.props}  DiscourseProps */
/** @typedef {typeof __propDef.events}  DiscourseEvents */
/** @typedef {typeof __propDef.slots}  DiscourseSlots */
export default class Discourse extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type DiscourseProps = typeof __propDef.props
export type DiscourseEvents = typeof __propDef.events
export type DiscourseSlots = typeof __propDef.slots
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
