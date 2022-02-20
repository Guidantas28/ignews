import { SignInButton } from '../SignInButton';
import style from './style.module.scss';

export function Header(){
    return(
        <header className={style.headerContainer}>
            <div className={style.headerContent}>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <a className={style.active} href="">Home</a>
                    <a href="">Posts</a>
                </nav>
                <SignInButton />
            </div>
        </header>
    )
}