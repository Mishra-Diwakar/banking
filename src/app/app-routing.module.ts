import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BankComponent } from './components/banks/bank/bank.component';
import { AddBankComponent } from './components/banks/add-bank/add-bank.component';
import { UsersComponent } from './components/users/users/users.component';
import { CreateUserComponent } from './components/users/create-user/create-user.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { EditBankComponent } from './components/banks/edit-bank/edit-bank.component';
import { FundComponent } from './components/users/fund/fund.component';
import { ActionComponent } from './components/users/action/action.component';
import { WalletloadComponent } from './components/services/walletload/walletload.component';
import { PayoutComponent } from './components/services/payout/payout.component';
import { ChargebackComponent } from './components/services/chargeback/chargeback.component';
import { InvoiceComponent } from './components/services/invoice/invoice.component';
import { PayinComponent } from './components/reports/payin/payin.component';
import { PayoutReportComponent } from './components/reports/payout-report/payout-report.component';
import { ChargebackReportComponent } from './components/reports/chargeback-report/chargeback-report.component';
import { IntentComponent } from './components/reports/intent/intent.component';
import { LedgerComponent } from './components/reports/ledger/ledger.component';
import { AllApiComponent } from './components/api reports/all-api/all-api.component';
import { PayinApiComponent } from './components/api reports/payin-api/payin-api.component';
import { PayoutApiComponent } from './components/api reports/payout-api/payout-api.component';
import { RunningApiComponent } from './components/api reports/running-api/running-api.component';
import { SheetsComponent } from './components/reports/sheets/sheets.component';
import { TokenComponent } from './components/api docs/token/token.component';
import { PayinDocsComponent } from './components/api docs/payin-docs/payin-docs.component';
import { PayoutDocsComponent } from './components/api docs/payout-docs/payout-docs.component';
import { BalanceEnquiryComponent } from './components/api docs/balance-enquiry/balance-enquiry.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { ChnageTpinComponent } from './components/users/chnage-tpin/chnage-tpin.component';
import { ChnagePasswordComponent } from './components/users/chnage-password/chnage-password.component';
import { ProfitLossComponent } from './components/reports/profit-loss/profit-loss.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component:DashboardComponent },
  { path: 'banks', component:BankComponent },
  { path: 'banks/add', component:AddBankComponent },
  { path: 'banks/update', component:EditBankComponent },
  { path: 'users',component:UsersComponent },
  { path: 'users/create',component:CreateUserComponent },
  { path: 'users/update',component:EditUserComponent },
  { path: 'users/fund',component:FundComponent },
  { path: 'users/action',component:ActionComponent },
  { path: 'users/profile',component:ProfileComponent },
  { path: 'users/tpin', component:ChnageTpinComponent },
  { path: 'users/password', component:ChnagePasswordComponent },
  { path: 'services/payin',component:WalletloadComponent},
  { path: 'services/payout',component:PayoutComponent },
  { path: 'services/chargeback',component:ChargebackComponent },
  { path: 'services/invoice',component:InvoiceComponent },
  { path: 'reports/payin',component:PayinComponent},
  { path: 'reports/payout',component:PayoutReportComponent },
  { path: 'reports/chargeback',component:ChargebackReportComponent },
  { path: 'reports/intent',component:IntentComponent },
  { path: 'reports/ledger',component:LedgerComponent },
  { path: 'reports/profit',component:ProfitLossComponent },
  { path: 'reports/api/all',component:AllApiComponent },
  { path: 'reports/api/payin',component:PayinApiComponent },
  { path: 'reports/api/payout', component:PayoutApiComponent },
  { path: 'reports/api/running',component:RunningApiComponent },
  { path: 'sheets', component:SheetsComponent },
  { path: 'docs/token',component:TokenComponent },
  { path: 'docs/payin',component:PayinDocsComponent },
  { path: 'docs/payout', component:PayoutDocsComponent },
  { path: 'docs/balance',component:BalanceEnquiryComponent },
  { path: 'page-not-found',component:PageNotFoundComponent },
  // { path: '**',component:PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
