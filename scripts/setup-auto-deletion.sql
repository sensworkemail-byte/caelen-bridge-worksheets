-- Create a function to delete old contacts
CREATE OR REPLACE FUNCTION delete_old_contacts()
RETURNS void AS $$
BEGIN
  DELETE FROM contacts 
  WHERE created_at < NOW() - INTERVAL '30 days'
  AND keep_record = false OR keep_record IS NULL;
END;
$$ LANGUAGE plpgsql;

-- Create a scheduled job to run daily at 2 AM
SELECT cron.schedule(
  'delete-old-contacts',
  '0 2 * * *', -- Daily at 2 AM
  'SELECT delete_old_contacts();'
);

-- Add keep_record column to allow manual retention
ALTER TABLE contacts ADD COLUMN IF NOT EXISTS keep_record BOOLEAN DEFAULT false;

-- Add index for the cleanup query
CREATE INDEX IF NOT EXISTS idx_contacts_cleanup ON contacts(created_at, keep_record);
