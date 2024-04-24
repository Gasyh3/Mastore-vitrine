import React from 'react';
import { Button, Link } from '@nextui-org/react';
import { IconBrandLinkedin, IconPhone, IconMail } from '@tabler/icons-react';

function GroupButtonOnRight() {
return (
    <div className='fixed bottom-45 right-4 p-2 z-70 flex flex-col gap-3' style={{ height: '70vh', justifyContent: 'center' }}>
            <Button as={Link} href="#contact" className='bg-sky-900 w-full h-5 text-white py-6 rounded-lg shadow-lg hover:bg-white hover:text-sky-900'>
                    <IconMail width={64} height={64} />
            </Button>
            <Button as={Link} href="#phone" className='bg-sky-900 w-full text-white py-6 rounded-lg shadow-lg hover:bg-white hover:text-sky-900'>
                    <IconPhone width={64} height={64} />
            </Button>
            <Button as={Link} isExternal href="https://www.linkedin.com/company/mastore/mycompany/" className='bg-sky-900 text-white w-full py-6 rounded-lg shadow-lg hover:bg-white hover:text-sky-900'>
                    <IconBrandLinkedin width={64} height={64} />
            </Button>
    </div>
)
}

export default GroupButtonOnRight