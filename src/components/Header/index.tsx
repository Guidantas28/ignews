import { SignInButton } from '../SignInButton';
import style from './style.module.scss';
import { ActiveLink } from '../ActiveLink';

export function Header(){
   
    
    return(
        <header className={style.headerContainer}>
            <div className={style.headerContent}>
                <a><img src="/images/logo.svg" alt="ig.news" /></a>
                <nav>
                    <ActiveLink activeClassName={style.active} href="/">
                        <a >Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={style.active} href="/posts" prefetch>
                        <a>Posts</a>
                    </ActiveLink>
                </nav>
                <SignInButton />
            </div>
        </header>
    )
}