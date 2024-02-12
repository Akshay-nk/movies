import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBRipple
} from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div>
      <MDBFooter className='text-center text-white' style={{ backgroundColor: 'black' }}>
      <MDBContainer className='p-4'>
        <section className=''>
          <MDBRow>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img  src='https://th.bing.com/th/id/OIP.tTcQW3imnBN7wCJAZOW1ygHaEK?w=307&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' width={'200px'} height={'100px'} />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://th.bing.com/th/id/OIP.QAELLY018AS1vnTu4AJ_jAHaE8?w=249&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' width={'200px'} height={'100px'} />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://th.bing.com/th/id/OIP.MUguCHzLi28jMEUJh0okoQHaEH?w=258&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' width={'200px'} height={'100px'} />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://th.bing.com/th/id/OIP.8AoKpvQuWMpSPfngRM-ZCQHaLP?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' width={'200px'} height={'100px'} />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://th.bing.com/th/id/OIP.v5XPy_ZW3JNtoYE7c1NEHwHaDd?w=302&h=163&c=7&r=0&o=5&dpr=1.3&pid=1.7' width={'200px'} height={'100px'} />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU
                2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCADqAOMDASIAAhEBAxEB/8Q
                AGwAAAgMBAQEAAAAAAAAAAAAAAwQAAgUBBgf/xAA+EAABAwIEAwYDBgUCBwEAAAABAAIRAyEEEjFRQWFxBRMigZGhMkKxFCNSwdHwBjNicuEVJDRTY3OSo9Lx/8QAGgEAAgM
                BAQAAAAAAAAAAAAAAAgQAAQMFBv/EACQRAAMAAgICAgMBAQEAAAAAAAABAgMREiEEMRNBFCJRMmEz/9oADAMBAAIRAxEAPwD5GpwUXFCEUUUUIdU5ri6oQhUUhdudICos5NoGn
                FcVi10clICsmiqi6pY66/VQogMLok+WnndVVgYtzUIGdXeTqLgTIXQ6YgtncyPzQbjgI3hdAJ0iUDDXsOO82no8j6qwzj5asci0/kgAuGs+SK2ruSOcygaNEwwrObr3nmz9DCI
                3E09xPGQWlVYXkS188v3ZdkgxUptNvmaJ9WrJ6Zqtos6pQfIJ14WI+qC6hTd8DiOoMJhrMK4CWEDkQR7q/wBipOvSeWnXWJ9EHJT/AMNOLoz3Uq1O8SOSjasWMgiw/wDxPnDY5nD
                O29pafol6gp3FWi+mR80SBfcX9losiroBw0VY8HS06g6HmOKJmPihwcCIc07eaXNFwlzXBzff2XA+LOHCx4hXxT9A8mvZZzspIuW6wU7gsQ+mMxJ7lzm0jyLgTHskXSRc6fC4IQe
                WEC4E+IcyrcKlopVxez0JL5MBpEmDBuN1FlDGPAaMxsAFEn+ONfOZpXFaGAXMnYfqoIIsJPsF0zllVEQNbBJI8lPuxwnqpsvQNRELmAQPYfqqSNlCaJPT81IJ0Vhk4kjylcMA2coQjRO4XQ1xMQZ4bnouh9/F6/qFfMWiROXWDw5gqm2GkgZZaQevJRrQbHVFgOnL83seIQiHBw3U2RrRHASY0/wq6FEgBwnQjh0VDfysrQLRZ5LXDKbENPqFYPB1ZfdpP00QiZy8kRk7Kn0XPbCgk6NadpEH6rsOn5Z2IH1Cu0NMS2NzP5I3dU4+OOrf0WLrRsp2LAVG3Ag7tj8kaniiwZajczdNII8lfuM1hUbfqPqqHCuOj2euWPVC6l+wlNL0HH2aqJpuAM6Zod+q4GvabRB04JU4SrfKJI4tIJ9iutdjaUy1xb/U0m3mh4/xhKv6jTp1MQ2wc4HncHkQUY4iu0DvaGYaB1M/ks6ljGyA9padgCtKjWZVHhLSRPhJv7pTJLntoZik/sC4YCqZBa1/HM0scPMJerg3G4bnHAtiR5CxWi6hh6gPeUXg6FzIP0v7Jc4CJOHxBbF8r5HspGVL7LrHv6M3u8lhciJHDzBul6jDrc/vQ81q1KOJFq1NtQR8bDDx5pd1EGcpdb5XCHdE1GVC1Y2ZkHdROdw38Q9Sot/kRj8bEssQT5DiuE+XJdBg3v1VVsLkXY2K4rEqEOdFxWBN4nyXDChCW2910Rf81xdE3VMtFgAbEdCrtLD4SYI1B08kPop4rHghDReHU3zqAQRHGLonhqOb0d+oQgXaTY7q7ZaR5R7qmGkcflLGRqAQfJBuCfQozmu1Gh+q6KL3AnlKipJFOG30Ca1x0EpinhsQ7TIB/U4fkmsNhy5osJ5p4Ydw+IHnln8kvk8lJ6QzHjbW2JUuz67o+8YDsxrnH6BNjs+q1sms1o/E9rWC3Uo7GUuLX85a8/UhHZRw4OYsYLXJw9I+9Qn6JSvIb9jE4EvRlvYW2bXovdswFx9pVTTxgAHdtj+oET6hegbWwVIA5cQ+xGVmRjfJtNo+qA/tKiw/dYBuYjV8ud5wR9VSzN+kE8KXtmQKWNOmEpvO4+tmrpw3aMf8JU5lr4HuQnn9q1xIIqMnXI1rI5AtE+6Wdi2Ol1RtRx18bqmnUElGqt/SM3Mr7AfZMSR42lnJ+U+hahilWpkkBjgD8rmz6H9E+yt2W+z8O9rjs/OPrPsrVKGEePuwAY1LgDG/E+yv5WuqRXxp9yAoYsNgOqOpPHLw+bXSPRMnG1YGanRrMsJou8fnTN/QrLrYZwzeEROp/f5ImE7OxOIILKhZSBgubJvzBV1jx65Nkmsm+KQ//qGDJgtfTOxH/wBQVDUw9UnKWmd7HyKtW7ArtbIcXGJBB1HOLeyxK1KvhKkOzNg6gkfRBjjFkf6Ps0yfLjW7XRrlgk2PmAfeFFjfaa//ADnerf0UWn49f0x+dfwSUUUXSOadsd1CBdcC7qoQ4uxzUUUIRRRSCqLLCVYSLDQ+6ryUuNCqZogrYIIO+uy7qQNRKG2URouDw+iBhpj1FlNzQHD1F0QsDQYjb1QsPw35plwcSSRA5pK3pj8LckwjgA0eS0Gv2WPhnQ9zZuHu8hK2KIkTrKWzTpjGF7QZjM0GEwxgjnzVWDiESDIgGfqlhlFTRaZMCeQuhdxTJ8QDhwBTcOPCD6KZd1Nl8UxF2GpuEEiLhoIEBZ2KoVKeoa5unwgEdCRqt3JyQ30szS0iQtIyOWZ3hVI81DhID3xxEMaR1j9VQB+cGnUyxE5wCb/2lalbDtY8yCWb8RzQvsjDlIcQDtxTizLQi8DTKF9ZoJY8PZo4QCWuPAzwKs2oHBoa8sykuI8Qvzy7J6lhqLWPbls9t51IWY9vcValJxNtJ0jQfosppW2kaOXGmzZw+KxDGFjqmYfKS6TvxS2ObSxLHSG95FxuNwkGPcwk035curCZHonmPZXYQcj3MaHS03ANiQfyWbjhXJDE5Oc8WebOHqAkACASAotp3Z8lx73Uk3Dp9lE9+Sv6Ifi/8POriuBqCrCm4+Qkp7ZzNAlE2yg0RmClSg8zlYYCHmjT42KKLVwPZT8QczwY4NGp5rWd/DofTcW0spAmWkysb8rHD0xrH4GbJPJI8sF3S6PXw1XC1alCoIew6niOBCEbrZUmtoWcOXplQorEER0uuiD/AI4qbJo40TbdNU6DzlBEknQcEzgsLm8RALrZQ7QcytWnhqbLmHONyf0CTy+Qk9IdxeO6W2I0qGUCQVd+nRNuACWqgQf3dK8nT7G3ClGYHGniXAmA45r7FOt7SyxTpUy86cbnoOCQxLc9SmG3dOWBrBWngqNPCGXNms8Akn5RwhM5eHFVXbFcTvk5l9DuF/1itB7tjG2PjMW6arVw+HxmtYsHQ69EvSrzlM+iMcREeKVzKp16R1JlSvY46kAPVDLRbdCGIEa9FGvnig0wk9svH7C5kBFuKuLq2X3VbN9CNajmB5C26TYzKcpByvu3kZ0WyWSIgaJc0m+JpFpPo66JV0Z1H2LhgAHA+3ks7tOlTcGvYR3jR4mzcs0NlqVAaYcHaBstduI+q85iqGMe44lpvmsBNuSY8ed1vYp5DanSWxVz3F7Y1MA8TOkrU7MovpOxFaq4AGm6m1s3kmVj5nDK+Ic0wR0WhRxLfC9zrC52nVPZU+OkJYKSrbNwMsLjQcSovPv7WqZnZWnLJy2Giiw/GoZflwZjgGvyjhqd0WmC9wbzkpYukyjUakPE8Wkey6VJ6OND7HWtLySBEOaPJaL6Q8DANSAeaXwppuc5o+YUy3qNVrNouFWkXaRKQyXpnY8fHtbGKcYdjALEjhrAQz2pXYypDHwT3TSNC82aFzFVqdKargSymAI3J4KvZlCvja9PHYnKzD0X56GHZ8JeLBxSWk91R1HfFqZF/wCIcK81MHUyzU7gNrZdxdeddTc0nMAOPlzXuccxlcmSDqd4XnMfhAyi58Xn2Ca8fNpKGczzMHKnaMUxBM62HREotkjaeKE4GyZw7ZLdk/T0jlyts3sIxoY2w0TZbbl6oFARTE21RWECWzpr1XHp97O5K0tFXUi4WWZjM7ZYy7za3NbGYDlI1S9QU5AY0F7tIAuUcVp7AyTtHmQzEsxGHMnvDVZk65gvTYnCue1tSnd2kA3MpZ2GNF1HEViDVc6oxjBGWkwAG3Mzcq+JrONIwTIDSI3W+anbkUwyoVMC3ENpDxugixE8RwQhja2Irtp0fhHxE3AjpZZlRtStU8ILQYBJt1K0sMxtINZTEH5ncXFG8cwt+2Ust29L0azHE5RJJ4lN0xolqFOYsn2MjgufTOnjkuIG8oojzQ4XRI14rFm5c6eqrI6KEob3QNlaKb6Eu0arWsgn4nNa3zKVD2Op90IJmTtHVLdoVXVcQ1ly2nc8Zc7RMYdoyTABi8WTsLjOxTlysxsZRyVvCPjBtuRqkapgAN+Em/IrU7UdlfRy2cHEjySLmsqs7xvH4mjVp2Kfxv8AVNnM8hatpCkn9hRXFGobhpg6KLfaFOFAonkoA6YGqgJV2x0PAogEk+zQwFPEmozK10zrrbkJXqu6c3uy7QQPVZHYNCs55qeBzAQCTqOi9NUa1zMpHBcfyb3Z6HwY1GzLxmENWjjGCM7QKzBuGiVhUO2HNqMo1cwoS1pyGC3nAXp8Sx5o061O7mA03jiRzXnMf2TnpuxeFabeKoyOPEhTA4f62H5SyLVY/o2stWm6MxcwgFp5KmMo97Qe2LltlpMZ3mGwRgB32emanM5boBaLhLzWmHUbR4mpScCW5TYlPYOgXPpxoGyStCt2fW73EP7uWZczeczZN4LC5aTHOaWuc0WI+EbFO5M+56Ofi8Zq+zmUgC0WhUJITjqccNEvUZYpJMfqdCFbEvp5rOLYM5dbK/Z9Zleq98k/dnJIj5gHJeuXMLgNSYE80HCMOHr06jXENzQ9vCHWKciZ47Ofkqt6Rp43xVcOw6Na5/qY/JCe1rmw2Lkeypjqjvtb2CJptZT84zH6rjPDBe5DafsLH60CfREWF/dHw1GCJRg2lVHgMuAkjRFotAiyyeR60zecS3sbotiBbzTzGmEvRDfDOv70T7BoI/RK0x+ZKZAeChaj5eX+V00zryQbCFC3VBqggEp8sIGn+UCrTlrjCtMCkecFLPiKpcYGY8B9SnXNyMMTEQSUOmz/AHNYwJz2nyTGIkMd0+qc2+hadLZ5btR5+0U2wYa2ZJ1lJ0m1XV2U6ch1RwAI2PFEx7nHEGflaAOif7HoFxOIc34ZZTJ4jifyXUTUYk2cak8uZpf00m4Wm1rG5ZhoEwOAUTmd/wCH2Ci5/wAlHU+KTw4uU/hMK2q5pc77ufEJgz5XQAKY1HSOHqncHg31HNcyqWidQYPRdLJel70cbFH7etnqsBRo4enTFKmGA3IBmTzJTtR030skqADGMbLjlAguMk9SivdI8lxb7e2eixPitILhqjC91J8Q8SOoQsQDTZWY2weCCIlLklpDm2IKdFVtdoDmjNFzuh19m/JNaZagS6hRJsTTFjqguPiPsiFwFhAAEIRM+qEzOiCQdt9Ffw8EEmF0PMqyJlnAcLyl6jRCOXWHJBqEeLbY6KA0zIxtMZmHcoFRsDS8aJrFmXM2BCUq97MtEgpuHtaEqXbDYOi7EVKz6jpfnkkm5BGqedhcNTI72qxtpgm/WNVmYSo0YilmqOp5vDIAIJ2cCtfuaTBWfTnvXZnOc8ZieMSSqyRTe0SLiVpkOHoU6ZqtqNLA0mWkX2CHSfJ2mNUm+q57hmMhvwgWE7wExSkwVjwaXZsrTfRqUiLLQo3HTTmsmmTqfZaNB9gl6HJe0OC0SYGiv+yhOIe1zdwIOx3CjCQ0AnMQAJ3O6zCCGDPql6xAB2KMXBK13ZgRurRVejFDm9/WI/GfQKYqr92eY46pcFzqlWNC90dASq1w4sMnw39E/K9IQb6Z52ux9bFBjReo5rG/ReqwuGbQp0qTRIa0AW13JWV2dhw6t3zhJbIbynZeiox4bJjPk6Ur6F/Gxap2/sp3RUTnkokObOlwR4ijRbXbLQMwIJ2K2cFh+6E76iNCEl2bQdmq5gcgeYnW2y2GsDJJ1JT+W9vRysGPX7BWzbS6I64sqNboRyRInTRKM6EgSCjUzCgbOvErraWXnJ4oNmpYk/vZVMomX22VcumyEoob2KqJESicSqwVRDgJNygVDrsjQR0QKkqwKEqmTPTzfDmEq1arg2NsHvP4aTc7va3ul8YZAHMH0TWCpsNBlRwzOeXEk6AAkABNTHSYrWXjtC/c0qwaabHAumzwWub1ButLgW5iCWluYDQkRKkDhYcl1GujC75GT3bWuIgyyxk6RZGpYnCM+Ks0xrlc10eiaxFGhUpVDVY1zWtnxaySGiFkUMDTa8tZJOYgOdGm9kbiXPKg4pt6SNWjjqT6hpsa4gAHNBA91q0agMLNp4elRa1rbnV7o1KcpCNCkMilv9RyKpezRDtIK6DqEBiIOKXYymWLiEpXqWN4O6M5wAN1m4h+olWltlVWkL0mAHzcFXGCWFrbE2HU2VsOZLuTpvwCYfRDy3ldN8tPYrra0BwlDu2saLloErRp0yLrlKlboE0GRCC72aRGkDynZRWlRY7NezGptpsAblEXjqihokEO48boU810O4gXBCdYkhoGPpKuIQQ6Qf3Kmc8PJZM3ljLYRRBjTVJtqEEQbcUUVSs9B8hiAS43VHCOqoKpsul/EdOamibOELg5rheIhVzWN+iomyOIuIsEtVNuaK54MpWq7cokBTEqoLnbzZNYAOFFzSZaKjgw8uIHKVSg3D4pr3CoTDi17W+EiNybweSdAa0Na0ANAgACAAOATi2lpnPuk/R1RckLkqzMj2te1zXaOBBQRQNIEsOYxLrQfIIuZc7wtIOxBUa30FNOfQOnVc4p2kCYSQAFQkfC4kjoVoUctvJK5J09D2N8lsaYCI6BR7w0G6o6q1o1H1SVbFNvBS/Fs35aCVqkzf8AfJZ9V+YwDclAxWPFMWBc4m23qsOpjMZ3rniq4E8BGUcoTeLxqvv0J5vJmevZ6aiA1wg6gz5J+mM0brz3ZmNrVqpp1YJDC4OFuIBBC9DSPHf6ocmNx0zXDatbQ02LgefVFAgBqXa6I4Sih1xrHtPmlmNI7kdsPVRdzHYqKthHnMysHaHbglw46K4Oi6DRzkxlrjv5KOfEoAdHFcc+Vm0acg7ascVYVZ1KTLoXA/0U4g8x8VhJEyRqriqs9rwJ3OsIjXquISoczyql8IAfsoXblA5C5BC+xkpLEPJsOKM59kGlSdiKpkkU2fGeN+AWkT2ZZL6OYJhZiSW/C6k7PG8iFpEqrWMYIY0NHL81CmPYoyEhVlQqpVFHHOQnPK65Bcei0lbAbCNrFuoka8/JHp4kE5WyDzCz55otLiVdYpr2Sc1T6HXPcSA5+vBuvqVV4pNa6ALt1NzPUpcOLi3ddq1fGGi4Db+iucUz6RKy1XtiGJaMjDbWfdZlUQ4FatVwLI2kLOrCwK2npmVei2BqijiaDiYDnd27o4EfovYU3S1q8MeW69Z2dXNfCUKh+LKWu/uaYJS3lRtKhvw703JpTdXBdAvEbIDXXvrZGBtyXNZ1Uy2bqouW2UQ6D2eblWzfRLhy7nXSaOVyD5wuZgJugGoN13Noq4k5hXOQw8zM2jTmqOfshF/srUguxjvIOqu2oEiakXJgLrauxRfGV8hoiorh8lZ4rFEZW1nULN4w1kQ090gpjAN+6qzxrH2a1ItL6zhTptLnk2A4Ddx2WvRpCjSZTBki7ju43JUS0DT5HSFwhXKqVYAMqphWKq7RWUwL+KWeQjvOt0pUNytYMaZJCPTPhPOAk86O2p4R1W3Ey2MAgZnIAdmZUfxJgKwfIe0fhMeiC0juLfhPrKprQSAvNyOZQajJBtqL9Vdxkc110FpGwzIW9Bmc4WI4zot/sN3+2rNPy13R5taViES7K34ibclvdm0e5w7v6n5jwvACmf8AxoLxv/Q1GOAKYa4b2SLDcz5kJgWGllyaR2pYSRuog5hufVRAGeRoYoP8L7O4bFMZ1jpylWzjKT4h7rvXjXtHnMeVvpjeZWzc0uHK2ZYuTfkFLkIlQn6I2BwlTHYhlFpLWAF9Z4+SmNuZ0H+FaWim9mp2HgW1C7G1mAta4twzXDwlws6pB20HmtergsBWk1MLQJPzBga71ZBR6bGUqdOlTAbTptDGN2aOCsUrWRt9G8wkjOPZPZU2of8Asrf/AEuf6b2a02w7f/Kofq5PlUcoqZWkLtpUKIy0qbGA6hjQJ6wuFEchuUIipKoSulUJVgnCUNx1ViUNxRAgXlJVTqm3nVJVuK3hGNgS4zK6KvhAG59kInVUEwOqY0LbHaVUlw52V6bspew8z5FK0jDgBqZR3tdZ7fiFuoWdI0lgjIc5uwn0VHPJgAXdYI1T4dLnVUp08uVx+IuGUbTxQ9GnsvhMNLwXXJJgH8ItdbNNzQajBoyB7apLCwO/cPkY1jD1KJhng1sQ3+lnsbrPLtpm+Hpo0adosmJEW20QGC07q0xIK5tnWl6Jvooh5lFmFyPDKAkEEahRRelPKDlN4e3mNf8ACJOiRa4sIITbXBzQQsLjXY3jvktMLIidgZ6L1nZGAOFwVN72xWxQbXq2u1pEsZ5D3JXnuycK3G9pYDDP/l1K2aqN6dJpquHnEea+hVwy9krlrS0NY532Z4BXCEQqpSowCIVSCilUM3V7AaAOCC4JlwQXAIkwABVCiuQyiBBOQ3IrkJyJAsXfxSdXinHpSoFvBhYoQSuAcI4yiEXK6GjXgmULF6TPE0/uE0Gan9wq0WzlHE2sjOOWSSIbpzhAzafQFzGEgu2kjklatTxk/hmOqu6sXCo/ew6JbW/DUrMLY7hHeF7TqXMJ9wjYY5cU4fiBAn1SNCoW1ABpHi5bBPUy01qDh+KCVnZrj+jcZ8I6W3VXggWCtSALW8l19hJC5teztL0LeLZRdhRCCeHUUUXozy5ESm/Kb/Cdf1Q1FPZaej1v8KU8/aVatww+EqEH+qq5rB7SvXVnXK85/BQBpdrGBP8AshPGPvV6OsBey5ef/R1sH+RZcMKxi/VQ8PNLGwMqhRDoqmIKsgF3FAcmDx6FAfqjlmTAOOqGSER3FDOoRgME4hCcdUV2pQX6nzRyAwL7pZ6Zcl3RbomIMLAOiV1q6dSujgmBQYoHxN5HXdBxz7hg4/F0TFICSlcdHfN6BY17GY9Cjn2LRoF0kBo5CTzhDGp/uUf/AC6nRqvRZ2m9xMjV59k7QqEVqLf+o0HzKSw38xv9v5FHw/8AOp/9xn1VWkSX2eopOtraVckERPOT+SHTAg+SuPmXIpdnel9HMrFFcAQLDRRZkP/Z' width={'200px'} height={'100px'}/>
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'black' }}>
        © 2024 Copyright:
        <a className='text-white' href='/'>
          Movies.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer