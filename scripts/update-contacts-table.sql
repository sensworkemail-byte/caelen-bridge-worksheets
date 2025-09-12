-- Add the keep_record column to existing contacts table
ALTER TABLE contacts ADD COLUMN IF NOT EXISTS keep_record BOOLEAN DEFAULT false;

-- Add index for efficient cleanup queries
CREATE INDEX IF NOT EXISTS idx_contacts_cleanup ON contacts(created_at, keep_record);

-- Update the RLS policy to include the new column
DROP POLICY IF EXISTS "Allow anonymous inserts" ON contacts;
CREATE POLICY "Allow anonymous inserts" ON contacts
  FOR INSERT 
  TO anon 
  WITH CHECK (true);
