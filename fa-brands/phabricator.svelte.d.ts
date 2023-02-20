/** @typedef {typeof __propDef.props}  PhabricatorProps */
/** @typedef {typeof __propDef.events}  PhabricatorEvents */
/** @typedef {typeof __propDef.slots}  PhabricatorSlots */
export default class Phabricator extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type PhabricatorProps = typeof __propDef.props
export type PhabricatorEvents = typeof __propDef.events
export type PhabricatorSlots = typeof __propDef.slots
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
