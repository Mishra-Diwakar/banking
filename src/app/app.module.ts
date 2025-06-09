import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { InterceptorService } from './services/InterceptorService';
import { AuthGuardService } from './services/AuthGuardService';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BankComponent } from './components/banks/bank/bank.component';
import { AddBankComponent } from './components/banks/add-bank/add-bank.component';
import { EditBankComponent } from './components/banks/edit-bank/edit-bank.component';
import { UsersComponent } from './components/users/users/users.component';
import { CreateUserComponent } from './components/users/create-user/create-user.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { FundComponent } from './components/users/fund/fund.component';
import { ActionComponent } from './components/users/action/action.component';
import { WalletloadComponent } from './components/services/walletload/walletload.component';
import { PayoutComponent } from './components/services/payout/payout.component';
import { ChargebackComponent } from './components/services/chargeback/chargeback.component';
import { InvoiceComponent } from './components/services/invoice/invoice.component';
import { PayinComponent } from './components/reports/payin/payin.component';
import { LedgerComponent } from './components/reports/ledger/ledger.component';
import { IntentComponent } from './components/reports/intent/intent.component';
import { PayoutReportComponent } from './components/reports/payout-report/payout-report.component';
import { ChargebackReportComponent } from './components/reports/chargeback-report/chargeback-report.component';
import { PayinApiComponent } from './components/api reports/payin-api/payin-api.component';
import { PayoutApiComponent } from './components/api reports/payout-api/payout-api.component';
import { RunningApiComponent } from './components/api reports/running-api/running-api.component';
import { AllApiComponent } from './components/api reports/all-api/all-api.component';
import { SheetsComponent } from './components/reports/sheets/sheets.component';
import { TokenComponent } from './components/api docs/token/token.component';
import { PayinDocsComponent } from './components/api docs/payin-docs/payin-docs.component';
import { PayoutDocsComponent } from './components/api docs/payout-docs/payout-docs.component';
import { BalanceEnquiryComponent } from './components/api docs/balance-enquiry/balance-enquiry.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { ChnagePasswordComponent } from './components/users/chnage-password/chnage-password.component';
import { ChnageTpinComponent } from './components/users/chnage-tpin/chnage-tpin.component';
import { ProfitLossComponent } from './components/reports/profit-loss/profit-loss.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    DashboardComponent,
    BankComponent,
    AddBankComponent,
    EditBankComponent,
    UsersComponent,
    CreateUserComponent,
    EditUserComponent,
    FundComponent,
    ActionComponent,
    WalletloadComponent,
    PayoutComponent,
    ChargebackComponent,
    InvoiceComponent,
    PayinComponent,
    LedgerComponent,
    IntentComponent,
    PayoutReportComponent,
    ChargebackReportComponent,
    PayinApiComponent,
    PayoutApiComponent,
    RunningApiComponent,
    AllApiComponent,
    SheetsComponent,
    TokenComponent,
    PayinDocsComponent,
    PayoutDocsComponent,
    BalanceEnquiryComponent,
    ProfileComponent,
    ChnagePasswordComponent,
    ChnageTpinComponent,
    ProfitLossComponent,
    PageNotFoundComponent
  ],
   imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    Ng2OrderModule,
    Ng2SearchPipeModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true, 
     }, AuthGuardService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
