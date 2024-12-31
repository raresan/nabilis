import { IGrain } from './GrainTypes'

import s from './Grain.module.scss'

const Grain = ({ opacity }: IGrain) => {
  return <div className={s.grain} style={{ opacity }} />
}

export default Grain
