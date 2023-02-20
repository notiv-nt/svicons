/** @typedef {typeof __propDef.props}  TemplateProps */
/** @typedef {typeof __propDef.events}  TemplateEvents */
/** @typedef {typeof __propDef.slots}  TemplateSlots */
export default class Template extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type TemplateProps = typeof __propDef.props
export type TemplateEvents = typeof __propDef.events
export type TemplateSlots = typeof __propDef.slots
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
