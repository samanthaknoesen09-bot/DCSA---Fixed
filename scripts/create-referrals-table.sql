-- Create referrals table to track client referrals
CREATE TABLE IF NOT EXISTS public.referrals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  referrer_name TEXT NOT NULL,
  referrer_email TEXT NOT NULL,
  referrer_phone TEXT NOT NULL,
  referrer_id_number TEXT,
  referrer_bank_name TEXT,
  referrer_account_number TEXT,
  referrer_branch_code TEXT,
  friend_name TEXT NOT NULL,
  friend_email TEXT,
  friend_phone TEXT NOT NULL,
  friend_relationship TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  referral_fee NUMERIC DEFAULT 350.00,
  fee_paid BOOLEAN DEFAULT false,
  fee_paid_at TIMESTAMPTZ,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.referrals ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public referral submissions" ON public.referrals;
CREATE POLICY "Allow public referral submissions"
  ON public.referrals
  FOR INSERT
  WITH CHECK (true);
