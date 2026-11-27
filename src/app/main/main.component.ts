import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  title = '發報資料';
  menuItems: any[] = [
    {
      title: '發報資料',
      route: '/main/zentable',
      icon: '📡'
    },
    {
      title: '發報管理',
      route: '/main/commandManagement',
      icon: '⚙️'
    },
    {
      title: '新增客戶',
      route: '/main/customer',
      icon: '👤'
    },
    {
      title: '客戶管理',
      route: '/main/customer-manager',
      icon: '👥'
    },
    {
      title: '今日送貨',
      route: '/main/deliverschedule/quary',
      icon: '🔧'
    },
    {
      title: '新增送貨資料',
      route: '/main/deliverschedule/add',
      icon: '📊'
    },
    {
      title: '送貨資料查詢',
      route: '/main/deliveryhistory/query',
      icon: '⚙️'
    },
    {
      title: '新增送貨資料',
      route: '/main/deliveryhistory/add',
      icon: '⚙️'
    }
  ];
  private destroy$ = new Subject<void>();

  constructor(private router: Router) { }

  ngOnInit(): void {
    // 先取得目前路由，處理重新整理的情況
    this.updatePageTitle(this.router.url);

    // 監聽路由變化
    this.router.events.pipe(
      filter((event): event is NavigationEnd =>
        event instanceof NavigationEnd
      ),
      takeUntil(this.destroy$)
    ).subscribe(event => {

      this.updatePageTitle(event.urlAfterRedirects);

      // 路由變更後關閉選單
      this.closeMenu();
    });
  }

  // 根據目前 URL 更新標題
  private updatePageTitle(url: string): void {

    // 移除 Query String、Hash 及尾端斜線
    const currentUrl = url.split('?')[0]
      .split('#')[0]
      .replace(/\/$/, '');

    // 優先找完全符合的路由
    let matchedItem = this.menuItems.find(
      item => item.route === currentUrl
    );

    // 如果是子路由，則尋找最符合的父層選單
    if (!matchedItem) {
      matchedItem = [...this.menuItems]
        .filter(item => currentUrl.startsWith(item.route + '/'))
        .sort((a, b) => b.route.length - a.route.length)[0];
    }

    this.title = matchedItem?.title || '首頁';
  }
  Logout() {

  }

  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(pageName: string = ''): void {
    this.menuOpen = false;
    if (pageName != '')
      this.title = pageName;

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
