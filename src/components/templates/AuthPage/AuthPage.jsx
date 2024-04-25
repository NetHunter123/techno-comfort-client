import {useMediaQuery} from "@/hooks/useMediaQuery";
import {useRef} from "react";
import {Button} from "@mantine/core";
import {FiLogIn, FiUserPlus} from "react-icons/fi";
import SignUpForm from "@/components/modules/AuthForms/SignUpForm";
import SignInForm from "@/components/modules/AuthForms/SignInForm";

import bgImg from "@/../public/forest-unsplash.jpg"
import styles from '@/components/modules/AuthForms/auth.module.css'

const AuthPage = () => {
  const isMedia800 = useMediaQuery(800)
  const switchCtn = useRef()
  const switchC1 = useRef()
  const switchC2 = useRef()
  const switchCircle1 = useRef()
  const switchCircle2 = useRef()
  const aContainer = useRef()
  const bContainer = useRef()

  const switchForm = () => {
    switchCtn.current.classList.add(styles.is_gx)

    setTimeout(() => switchCtn.current.classList.remove(styles.is_gx), 1500)

    switchCtn.current.classList.toggle(styles.is_txr)
    switchCircle1.current.classList.toggle(styles.is_txr)
    switchCircle2.current.classList.toggle(styles.is_txr)

    switchC1.current.classList.toggle(styles.is_hidden)
    switchC2.current.classList.toggle(styles.is_hidden)
    aContainer.current.classList.toggle(styles.is_hidden)
    bContainer.current.classList.toggle(styles.is_hidden)

    aContainer.current.classList.toggle(styles.is_txl)
    bContainer.current.classList.toggle(styles.is_txl)
    bContainer.current.classList.toggle(styles.is_z200)
  }

  return (
    <>
      <div className={`${styles.auth} `} style={{
        backgroundImage: `url(${bgImg.src})`
      }}>


        <div
          className={`${styles.container} ${styles.a_container}`}
          id="a-container"
          ref={aContainer}
        >
          <div className={`${styles.container__inner}`}>
            <SignUpForm switchForm={switchForm}/>
          </div>
        </div>
        <div
          className={`${styles.container} ${styles.b_container} ${styles.is_hidden}`}
          id="b-container"
          ref={bContainer}
        >
          <div className={styles.container__inner}>
            <SignInForm/>
          </div>
        </div>


        <div
          className={`${styles.auth__side} `}
          id="switch-cnt"
          ref={switchCtn}
        >
          <div
            className={`${styles.auth__side_circle} `}
            ref={switchCircle1}
          />
          <div
            className={`${styles.auth__side_circle} ${styles.auth__side_circle__t} `}
            ref={switchCircle2}
          />
          <div id="switch-c1" className={`${styles.auth__side_container}`} ref={switchC1}>
            {!isMedia800 && (
              <>
                <h2
                  className={`${styles.title} ${styles.auth__side_title}  `}
                >
                  Ласкаво просимо!
                </h2>
                <p
                  className={`${styles.auth__side_description} ${styles.description} `}
                >
                  Вас вітає магазин побутової техніки TechnoComfort, щоб залишатись на зв'язку з нами, будьласка,
                  пройдіть реєстрацію
                </p>
              </>
            )}
            <Button
              onClick={switchForm}
              className={`${styles.auth_button} ${styles.auth__side_button}  btn_rt`}
              gradient={{from: 'yellow', to: 'orange', deg: 90}}
              variant="gradient"
              // justify="center"
              leftSection={<FiLogIn size={!isMedia800?18: 28}/>}
            >
              {!isMedia800 && "Вхід"}
            </Button>
          </div>
          <div id="switch-c2" className={`${styles.auth__side_container} ${styles.is_hidden}`} ref={switchC2}>
            {!isMedia800 && (
              <>
                <h2
                  className={`${styles.auth__side_title} ${styles.title} `}
                >
                  Привіт, клієнт!
                </h2>
                <p
                  className={`${styles.auth__side_description} ${styles.description} `}
                >Введи свої особисті дані і насолоджуйся смачнини пропозиціями, вдалих покупок!
                </p>
              </>
            )}
            <Button
              onClick={switchForm}
              className={`${styles.auth_button} ${styles.auth__side_button}  btn_rt`}
              gradient={{from: 'yellow', to: 'orange', deg: 90}}
              variant="gradient"
              // justify="center"
              leftSection={<FiUserPlus size={!isMedia800?18: 28}/>}
            >
              {!isMedia800 && "Реєстрація"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
