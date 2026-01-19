import star1 from '@/assets/images/star-1.png'
import star2 from '@/assets/images/star-2.png'
import star3 from '@/assets/images/star-3.png'

import Star from '@/components/ui/Star'

import s from './Stars.module.scss'

const Stars = () => {
  return (
    <div className={s.stars}>
      {/* Top */}
      <Star src={star1} className={s.star} delay={0} />
      <Star src={star2} className={s.star} delay={0.4} />
      <Star src={star2} className={s.star} delay={0.7} />

      {/* Bottom */}
      <Star src={star2} className={s.star} delay={0.2} />
      <Star src={star1} className={s.star} delay={0.5} />
    </div>
  )
}

export default Stars
