// Fix multiple form labels for MkDocs accessibility
document.addEventListener('DOMContentLoaded', function() {
  
  // Fix drawer toggle
  fixMultipleLabels('__drawer', ['drawer-label-header', 'drawer-label-nav']);
  
  // Fix search toggle
  fixMultipleLabels('__search', ['search-label-header', 'search-label-other']);
  
});

/**
 * Fix multiple label associations for a checkbox
 * @param {string} checkboxId - The ID of the checkbox input
 * @param {array} labelIds - Array of IDs to assign to the labels
 */
function fixMultipleLabels(checkboxId, labelIds) {
  const checkbox = document.getElementById(checkboxId);
  
  if (!checkbox) return;
  
  // Find all labels pointing to this checkbox
  const labels = document.querySelectorAll(`label[for="${checkboxId}"]`);
  
  if (labels.length <= 1) return; // No issue if only one label
  
  // Create aria-labelledby string from assigned IDs
  const ariaLabelledBy = labelIds.slice(0, labels.length).join(' ');
  checkbox.setAttribute('aria-labelledby', ariaLabelledBy);
  
  // Process each label
  labels.forEach(function(label, index) {
    // Remove the 'for' attribute to break the direct association
    label.removeAttribute('for');
    
    // Assign unique ID for aria-labelledby reference
    if (labelIds[index]) {
      label.id = labelIds[index];
    }
    
    // Make label clickable by adding click handler
    label.style.cursor = 'pointer';
    label.addEventListener('click', function(e) {
      // Don't trigger if clicking on a link or button inside the label
      if (e.target.tagName !== 'A' && e.target.tagName !== 'BUTTON') {
        checkbox.click();
      }
    });
    
    // Add keyboard support (Enter and Space keys)
    label.setAttribute('tabindex', '0');
    label.setAttribute('role', 'button');
    label.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        checkbox.click();
      }
    });
  });
}