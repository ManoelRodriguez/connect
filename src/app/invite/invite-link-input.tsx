import { IconButton } from '@/components/IconButton'
import { InputField, InputIcon, InputRoot } from '@/components/Input'
import { Copy, Link } from 'lucide-react'

export function InviteLikeInput() {
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField
        readOnly
        defaultValue="http://localhost:3000/invite/7677u85u34"
      />
      <IconButton className="-mr-2">
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}
