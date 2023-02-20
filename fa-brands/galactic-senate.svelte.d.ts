/** @typedef {typeof __propDef.props}  GalacticSenateProps */
/** @typedef {typeof __propDef.events}  GalacticSenateEvents */
/** @typedef {typeof __propDef.slots}  GalacticSenateSlots */
export default class GalacticSenate extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type GalacticSenateProps = typeof __propDef.props
export type GalacticSenateEvents = typeof __propDef.events
export type GalacticSenateSlots = typeof __propDef.slots
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
